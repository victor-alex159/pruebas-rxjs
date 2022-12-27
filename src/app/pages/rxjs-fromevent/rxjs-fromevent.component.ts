import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjs-fromevent',
  templateUrl: './rxjs-fromevent.component.html',
  styleUrls: ['./rxjs-fromevent.component.scss']
})
export class RxjsFromeventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el: any = document.getElementById('elemento');
    const  mouseMove = fromEvent(el, 'mousemove');
    mouseMove.subscribe((x: any) => {
      console.log(`Coordenada: ${x.clientX}, Y: ${x.clientY}`);
    });
  }

}
