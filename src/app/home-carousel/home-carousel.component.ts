import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import Swiper, { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';
import { CategoryService } from '../category-tree/category.service';
import { InputFilter_header } from '../_models/input-filter-header-model';
import { ItemCategoryModel } from '../_models/main-categories-model';
import { UtilsService } from '../_services/utils.service';


@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent {

  mountainFilter: string;
  urbanFilter: string;
  roadFilter: string;

  public show: boolean = true;

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  scrollbar: ScrollbarOptions = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  pagination: PaginationOptions = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(private categoryService: CategoryService, private utilsService: UtilsService) {}


  getCategoryTypesLinkMountain(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // Mountain
      const mountainBikes: ItemCategoryModel[] = itemType
          .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const mountainIndex: number = mountainBikes
          .map(cat => cat.subCategoryName ).indexOf("Montaña");
      mountainBikes[mountainIndex].isSelected = true;
      this.mountainFilter = this.utilsService.encodeBase64(new InputFilter_header([], "", [], mountainBikes));
    });
  }

  getCategoryTypesLinkRoad(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // road
      const roadBikes: ItemCategoryModel[] = itemType
        .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const roadIndex: number = roadBikes
          .map(cat => cat.subCategoryName ).indexOf("Ruta");
          roadBikes[roadIndex].isSelected = true;
      this.roadFilter = this.utilsService.encodeBase64(new InputFilter_header([], "", [], roadBikes));
  
    });
  }

  getCategoryTypesLinkUrban(): void {
    this.categoryService.getCategoryTypes().subscribe((itemType: ItemCategoryModel[]) => {
      
      // Urbain
      const urbanBikes: ItemCategoryModel[] = itemType
          .filter(cat => cat.subCategoryName == "Bicicletas")[0].subCategories;
      const urbanIndex: number = urbanBikes
          .map(cat => cat.subCategoryName ).indexOf("Urbana");
      urbanBikes[urbanIndex].isSelected = true;
      this.urbanFilter = this.utilsService.encodeBase64(new InputFilter_header([], "", [], urbanBikes));
    });
  }

}
