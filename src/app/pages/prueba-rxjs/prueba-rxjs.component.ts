import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prueba-rxjs',
  templateUrl: './prueba-rxjs.component.html',
  styleUrls: ['./prueba-rxjs.component.scss']
})
export class PruebaRxjsComponent implements OnInit {

  obs: any;

  constructor() { }

  ngOnInit(): void {

    this.obs = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

  }

  rxjsFun() {
    console.log('Antes de subscribirse');
    this.obs.subscribe({
      next(x) {
        console.log('Obtuvo el valor ' + x);
      }, 
      error(err) {
        console.error('Algo pasó mal ' + err);
      }, 
      complete() {
        console.log('Hecho');
      }
    });
    console.log('Después de subscribirse');
  }


}
