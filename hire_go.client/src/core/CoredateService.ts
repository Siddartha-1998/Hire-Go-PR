import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};
@Injectable({
  providedIn: 'root'
})

export class CoredateService {
  result: any;
  api = "https://rqf9cl8q-7107.inc1.devtunnels.ms/Host";//selvam
  //api = "https://55h3jgp0-7107.inc1.devtunnels.ms/Host";//kowshik
  constructor(private http: HttpClient) {

  }
  //ServerCall(classname: any, obj: any, type: any): any {
  //  /* <WeatherForecast[]>*/
  //  try {
  //    this.http.get(this.api + "?classname=" + classname + "&obj=" + obj + "&type=" + type, httpOptions).subscribe(
  //      (response) => {
  //        this.result = response;
  //      },
  //      (error) => {
  //      }
  //    );
  //  }
  //  catch (ex) {
  //  }
  //  return this.result;
  //}
  ServerCall(classname: any, obj: any, type: any): Observable<any> {
    return this.http.get(
      `${this.api}?classname=${classname}&obj=${obj}&type=${type}`,
      httpOptions
    );
  }

  SaveCall(classname: any, obj: any, type: any): any {
    /* <WeatherForecast[]>*/
    try {
      this.http.get(this.api + "?classname=" + classname + "&obj=" + obj + "&type=" + type, httpOptions).subscribe(
        (response) => {
          this.result = response;
        },
        (error) => {
        }
      );
    }
    catch (ex) {
    }
    return this.result;
  }

 
}


