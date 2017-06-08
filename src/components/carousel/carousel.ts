import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

export interface CarouselItem {
    title: string,
    description: string,
    country: string,
    imgUrl?: string,
    color?: string,
    outstanding: boolean
}

interface SlideItem {
    idx: number,
    title: string,
    description: string,
    country: string,
    imgUrl: string,
    color?: string,
    currentPlacement: number,
    outstanding: boolean
}


/**
 * Generated class for the CarouselComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'carousel',
  templateUrl: 'carousel.html'
})
export class CarouselComponent {

    private currentDeg: number = 0;
    private items: Array<SlideItem> = [];
    //private containerWidth: number = 250;
    private tz: number;

    @Input() set slides(values: Array<CarouselItem>) {
        if (!values.length) return;

        let degree: number = 0;

        if(this.platform.is('core') || this.platform.is('mobileweb')) {
            console.log("Browser");
            this.tz = 250;

        } else {
            console.log("Mobile");
            this.tz = 200;
        }

        //this.tz = Math.round((this.containerWidth / 2) / Math.tan(Math.PI / values.length));
        this.items = <Array<SlideItem>>values.map((item: CarouselItem, index: number) => {
            let slideItem = {
                idx: index,
                title: item.title,
                description: item.description,
                country: item.country,
                imgUrl: item.imgUrl,
                color: item.color,
                outstanding: item.outstanding,
                currentPlacement: degree
            };
            degree = degree + 60;
            return slideItem;
        })
    }

    @Output() selectSlide = new EventEmitter();


    constructor(public platform: Platform, private eleRef: ElementRef) {
        console.log('Hello CarouselComponent Component');
    }

    onSwipeLeft() {
        this.currentDeg = this.currentDeg - 60;
        this.applyStyle();
    }

    onSwipeRight() {
        this.currentDeg = this.currentDeg + 60;
        this.applyStyle();
    }

    private applyStyle() {
        let ele = this.eleRef.nativeElement.querySelector('.carousel');
        ele.style[ '-webkit-transform' ] = "rotateY(" + this.currentDeg + "deg)";
        ele.style[ '-moz-transform' ] = "rotateY(" + this.currentDeg + "deg)";
        ele.style[ '-o-transform' ] = "rotateY(" + this.currentDeg + "deg)";
        ele.style[ 'transform' ] = "rotateY(" + this.currentDeg + "deg)";
    }

    selectItem(item:any) {

        //console.log(item);

        let ele = this.eleRef.nativeElement.querySelector('.slide-item-' + item.idx);

        ele.style[ '-webkit-animation-name' ] = "resize";
        ele.style[ '-webkit-animation-duration' ] = "1s";
        ele.style[ '-webkit-animation-timing-function' ] = "ease-in-out";
        ele.style[ '-webkit-animation-iteration-count' ] = "1";

        /*
        ele.style[ 'width' ] = "100%";
        ele.style[ '-webkit-transition' ] = "width 300ms ease-in-out, height 300ms ease-in-out";
        ele.style[ '-moz-transition' ] = "width 300ms ease-in-out, height 300ms ease-in-out";
        ele.style[ '-o-transition' ] = "300ms ease-in-out, height 300ms ease-in-out";
        ele.style[ 'transition' ] = "300ms ease-in-out, height 300ms ease-in-out";
        */

        setTimeout(() => {
            /*
            ele.style[ 'width' ] = "200px";
            ele.style[ '-webkit-transition' ] = "width 300ms ease-in-out, height 300ms ease-in-out";
            ele.style[ '-moz-transition' ] = "width 300ms ease-in-out, height 300ms ease-in-out";
            ele.style[ '-o-transition' ] = "300ms ease-in-out, height 300ms ease-in-out";
            ele.style[ 'transition' ] = "300ms ease-in-out, height 300ms ease-in-out";
            */
            ele.style[ '-webkit-animation-name' ] = "";
            this.selectSlide.emit(item);
        },2000);
    }

}