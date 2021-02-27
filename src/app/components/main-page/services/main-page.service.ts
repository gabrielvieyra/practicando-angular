import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MainPageService {
  obtenerInformacion() {
    //console.log('...');
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))
  }
}
