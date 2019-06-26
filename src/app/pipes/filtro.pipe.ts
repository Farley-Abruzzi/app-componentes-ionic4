import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arrey: any[],
            text: string,
            coluna: string): any[] {
    //console.log(arrey);
    if(text === '') {
      return arrey;
    }

    text = text.toLowerCase();

    return arrey.filter( item => {
      return item[coluna].toLowerCase()
              .includes( text );
    });
  }

}
