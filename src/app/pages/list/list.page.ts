import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista') lista: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService, private toastCtrl: ToastController ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();
  }
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  favorite( user ) {
    //console.log('favorite', user);
    this.presentToast('Guardado nos favoritos!');
    this.lista.closeSlidingItems();
  }

  share( user ) {
    //console.log('share', user);
    this.presentToast('Compartilhado!');
    this.lista.closeSlidingItems();
  }

  borrar( user ) {
    //console.log('borrar', user);
    this.presentToast('Apagado!');
    this.lista.closeSlidingItems();
  }

}
