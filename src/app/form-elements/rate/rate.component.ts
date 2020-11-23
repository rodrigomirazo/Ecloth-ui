import { Component, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'item-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

  
  private _rate: number;
  private _enableEdit: boolean;

  private iconRates: boolean[] = [];

  constructor(
    //private matIconRegistry: MatIconRegistry,
    //private domSanitizer: DomSanitizer
  ) {
    /*
    this.matIconRegistry.addSvgIcon("circle_active",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/rate/circulos-activo.svg") );

    this.matIconRegistry.addSvgIcon("circle_inactive",
    this.domSanitizer.bypassSecurityTrustResourceUrl("assets/images/rate/circulos-inactivo.svg") );
*/
    for (let i = 0; i < 5; i++) {
      this.iconRates = this.iconRates.concat(false);
    }
  }

  updateRange(index) {
    console.log("index: " + index);
    this.rate = index;
  }

  /** Rate Inputs */
  @Input()
	public get rate(): number {
    console.log("GET rate: " + this._rate);
		return this._rate;
	}
  public set rate(value: number) {
    console.log("SET rate: " + value);
    this._rate = value;
    this.inactiveAll();
    this.activate(this.rate);
		
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
}
