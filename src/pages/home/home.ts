import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
        this.data = [
          {
              id: 1,
              title: 'User 1',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#1abc9c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'http://oxygennacdn3.oxygenna.com/wp-content/uploads/2015/11/18.jpg',
              outstanding: true
          },
          {
              id: 2,
              title: 'User 2',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e67e22',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://s-media-cache-ak0.pinimg.com/originals/d2/7b/4f/d27b4fa995194a0c77b8871a326a7c0b.jpg'
          },
          {
              id: 3,
              title: 'User 3',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e74c3c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              outstanding: true,
              backgroundImgUrl: 'https://i.imgur.com/AMf9X7E.jpg'
          },
          {
              id: 4,
              title: 'User 4',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2c3e50',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'http://oxygennacdn2.oxygenna.com/wp-content/uploads/2015/06/small.jpg'
          },
          {
              id: 5,
              title: 'User 5',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2980b9',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://newevolutiondesigns.com/images/freebies/google-material-design-wallpaper-1.jpg'
          },
          {
              id: 6,
              title: 'User 6',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#9b59b6',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://i.ytimg.com/vi/GpTrOahC6jI/maxresdefault.jpg'
          },
          {
              id: 7,
              title: 'User 7',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#1abc9c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'http://www.templatemonsterblog.es/wp-content/uploads/2016/04/1-9-2.jpg'
          },
          {
              id: 8,
              title: 'User 8',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e67e22',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://cms-assets.tutsplus.com/uploads/users/41/posts/25951/image/material-design-3.jpg'
          },
          {
              id: 9,
              title: 'User 9',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#e74c3c',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://cms-assets.tutsplus.com/uploads/users/41/posts/25951/image/material-design-background-1.jpg'
          },
          {
              id: 10,
              title: 'User 10',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2c3e50',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'http://www.vactualpapers.com/web/wallpapers/1-pattern-35-color-schemes-material-design-wallpaper-series-image11/2560x1440.jpg'
          },
          {
              id: 11,
              title: 'User 11',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#2980b9',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://www.smashingmagazine.com/wp-content/uploads/2015/07/Ultimate-Material-Lollipop-Collection1.png'
          },
          {
              id: 12,
              title: 'User 12',
              description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
              country: 'Spain',
              color: '#9b59b6',
              isSelected: false,
              imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
              backgroundImgUrl: 'https://s-media-cache-ak0.pinimg.com/736x/c2/bd/3a/c2bd3ae483f9617e6f71bc2a74b60b5a.jpg'
          },
            {
                id: 13,
                title: 'User 13',
                description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
                country: 'Spain',
                color: '#1abc9c',
                isSelected: false,
                imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
                backgroundImgUrl: 'http://www.vactualpapers.com/web/wallpapers/material-design-hd-background-by-vactual-papers-wallpaper-84/thumbnail/lg.jpg'
            },
            {
                id: 14,
                title: 'User 14',
                description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
                country: 'Spain',
                color: '#e67e22',
                isSelected: false,
                imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
                backgroundImgUrl: 'https://ak2.picdn.net/shutterstock/videos/19300069/thumb/9.jpg'
            },
            {
                id: 15,
                title: 'User 15',
                description: 'Wait a minute. Wait a minute, Doc. Uhhh...',
                country: 'Spain',
                color: '#e74c3c',
                isSelected: false,
                imgUrl: 'http://www.urbanhabitat.com.ar/img/team/14.jpg',
                backgroundImgUrl: 'http://oxygennacdn1.oxygenna.com/wp-content/uploads/2017/01/header-image-6.jpg'
            },

      ];
  }


    ionViewDidLoad() {
        this.getCurrentSlides();
    }

    getCurrentSlides() {

        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });

        loading.present();

        if (this.start == this.data.length) {
            this.start = 0;
            this.end = 5;
        }
        this.slides = [];
        for (var i = this.start; i <= this.end; i++) {
            this.slides.push(this.data[i]);
        }

        loading.dismiss();

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
