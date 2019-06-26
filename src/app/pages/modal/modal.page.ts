import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modarCtrl: ModalController ) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modarCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nome: 'Farley',
        pais: 'Brasil'
      } 
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno do modal', data);
  }

}
