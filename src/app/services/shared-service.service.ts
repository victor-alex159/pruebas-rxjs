import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  public urlUsuarios: string = 'http://localhost:8001/usuario/'

  constructor(
    public http: HttpClient,

  ) { }

  public getFile(path: string, bean?: any): any {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if(bean != null) {
      let data = bean;
      return this.http.post(`${this.urlUsuarios + path}`, JSON.stringify(data), {headers: headers, responseType: 'arraybuffer'})
      .pipe(
        map(resp => {
          let result = resp;
          return result;
        })
      )
    }

  }




}
