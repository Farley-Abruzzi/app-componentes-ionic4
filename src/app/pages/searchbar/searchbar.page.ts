import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  albuns: any[] = [];
  textBuscar = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbuns().subscribe( albuns =>{
      console.log( albuns );
      this.albuns = albuns;
    });
  }
  burcar( event ) {
    //console.log(event);
    this.textBuscar = event.detail.value;
  }
}
