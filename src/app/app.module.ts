import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaRxjsComponent } from './pages/prueba-rxjs/prueba-rxjs.component';
import { RxjsIntervalTimerComponent } from './pages/rxjs-interval-timer/rxjs-interval-timer.component';
import { RxjsFromeventComponent } from './pages/rxjs-fromevent/rxjs-fromevent.component';
import { RxjsMapFilterComponent } from './pages/rxjs-map-filter/rxjs-map-filter.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    PruebaRxjsComponent,
    RxjsIntervalTimerComponent,
    RxjsFromeventComponent,
    RxjsMapFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
