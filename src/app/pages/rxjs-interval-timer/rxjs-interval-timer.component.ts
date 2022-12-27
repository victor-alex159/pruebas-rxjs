import { Component, OnInit } from '@angular/core';
import { interval, take, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-interval-timer',
  templateUrl: './rxjs-interval-timer.component.html',
  styleUrls: ['./rxjs-interval-timer.component.scss']
})
export class RxjsIntervalTimerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const contador = interval(1000);
    const contidad = contador.pipe(take(4));
    contidad.subscribe(x => {
      console.log(`Cada ${x} segundos`)
    });

  }

}
