import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinity-scroll',
  templateUrl: './infinity-scroll.page.html',
  styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {

    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }
  loadData(event) {
    console.log('Carregando seguintes...')

    setTimeout(() =>{

      if(this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const novoArr = Array(20);
      this.data.push(...novoArr);
      event.target.complete();

    }, 1000);
  }
}
