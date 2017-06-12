import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CarouselComponent } from "../../components/carousel/carousel"
import { DetailsPage } from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private data: any;
    private slides: any = [];
    private start: number = 0;
    private end: number = 5;

  constructor(public navCtrl: NavController) {
        this.data = [
          {
              id: 1,
              title: 'User 1',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#1abc9c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              outstanding: true
          },
          {
              id: 2,
              title: 'User 2',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e67e22',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 3,
              title: 'User 3',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e74c3c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              outstanding: true
          },
          {
              id: 4,
              title: 'User 4',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2c3e50',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 5,
              title: 'User 5',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2980b9',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 6,
              title: 'User 6',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#9b59b6',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 7,
              title: 'User 7',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#1abc9c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 8,
              title: 'User 8',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e67e22',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 9,
              title: 'User 9',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e74c3c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 10,
              title: 'User 10',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2c3e50',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 11,
              title: 'User 11',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2980b9',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
          {
              id: 12,
              title: 'User 12',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#9b59b6',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
          },
            {
                id: 13,
                title: 'User 13',
                description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
                country: 'Spain',
                color: '#1abc9c',
                isSelected: false,
                imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
            },
            {
                id: 14,
                title: 'User 14',
                description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
                country: 'Spain',
                color: '#e67e22',
                isSelected: false,
                imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
            },
            {
                id: 15,
                title: 'User 15',
                description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
                country: 'Spain',
                color: '#e74c3c',
                isSelected: false,
                imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg'
            },

      ];
  }


    ionViewDidLoad() {
        this.getCurrentSlides();
    }

    getCurrentSlides() {
        if (this.start == this.data.length) {
            this.start = 0;
            this.end = 5;
        }
        this.slides = [];
        for (var i = this.start; i <= this.end; i++) {
            this.slides.push(this.data[i]);
        }
        this.start = this.end + 1;
        if ((this.start + this.end) < this.data.length) this.end = this.start + this.end;
        else this.end = this.data.length - 1;
    }

  selectItem(item: any) {
      this.navCtrl.push(DetailsPage, {
          item: item
      });
  }

}
