import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'item-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

  @Output()
  private emitRate = new EventEmitter<number>();
  
  private _rate: number;
  private _enableEdit: boolean;
  private _iconType: string;

  private iconRates: boolean[] = [];
  private initialSetup = false;
  private iconActivePath: string;
  private iconInactivePath: string;

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.iconRates = this.iconRates.concat(false);
    }
  }

  updateRange(index) {
    this.rate = index;
  }

  /** Rate Inputs */
  @Input()
	public get rate(): number {
		return this._rate;
	}
  public set rate(value: number) {
    
    if(this._enableEdit || !this.initialSetup) {
      this._rate = value;
      this.emitRate.emit(value);
      this.inactiveAll();
      this.activate(this.rate);
      this.initialSetup = true;
    }
	}

  inactiveAll() {
    for (let i = 0; i < 5; i++) {
      this.iconRates[i] = false;
    }
  }

  activate(rate) {
    for (let i = 0; i <= rate; i++) {
      this.iconRates[i] = true;
    }
  }

  @Input()
	public get enableEdit(): boolean {
		return this._enableEdit;
	}
	public set enableEdit(value: boolean) {
		this._enableEdit = value;
  }
  
  @Input()
	public get iconType(): string {
		return this._iconType;
	}
	public set iconType(value: string) {
    if(value == "circle") {
      this.iconActivePath = "assets/images/rate/circulos-activo.svg";
      this.iconInactivePath = "assets/images/rate/circulos-activo.svg";
      
    } if(value == "star") {
      this.iconActivePath = "assets/images/market-place/icon_star_active.svg";
      this.iconInactivePath = "assets/images/market-place/icon_star_inactive.svg";
    }
		this._iconType = value;
	}
}
