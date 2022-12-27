import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs';
import { SharedServiceService } from 'src/app/services/shared-service.service';
import * as FileSaver from 'file-saver';
import { Usuario } from 'src/app/beans/Usuario';

@Component({
  selector: 'app-rxjs-map-filter',
  templateUrl: './rxjs-map-filter.component.html',
  styleUrls: ['./rxjs-map-filter.component.scss']
})
export class RxjsMapFilterComponent implements OnInit {

  //pdfResultSRC: string = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  pdfResultSRC: string = '';

  constructor(
    public sharedService: SharedServiceService
  ) { }

  ngOnInit(): void {

    

  }

  public mostrarReporteUsuario() {
    let nombreReporte = 'Mi-reporte';
    let usuario = new Usuario();
    usuario.id = 2;
    this.sharedService.getFile('mostrar/reporte-usuario', usuario)?.subscribe({
      next(resp) {
        let tempBlob = new Blob([resp], { type: 'application/x-pdf' });
        const fileReader = new FileReader();
        fileReader.onload = () => {
          this.pdfResultSRC = new Uint8Array(fileReader.result as ArrayBuffer);
          console.log(this.pdfResultSRC)
        };
        fileReader.readAsArrayBuffer(tempBlob)
      },
      error(err) {
        console.error('ERROR EN MOSTRAR EL REPORTE!!' + err)
      }
    });
  }

  public descargarReporteUsuarios() {
    let nombreReporte = 'Reporte-usuarios';
    let usuario = new Usuario();
    usuario.id = 2;
    this.sharedService.getFile('descarga/reporte-usuario', usuario)?.subscribe({
      next(resp) {
        FileSaver.saveAs(new Blob([resp], {type: 'application/x-pdf'}), nombreReporte + '.pdf')
      },
      error(err) {
        console.error('ERROR EN LA DESCARGA!!' + err)
      }
    });
  }

}
