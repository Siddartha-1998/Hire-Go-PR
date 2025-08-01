import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})

export class CoredateService {
  result: any;
  api = "https://55h3jgp0-7107.inc1.devtunnels.ms/Host";
  constructor(private http: HttpClient) {

  }
  ServerCall(classname: any, obj: any, type: any): any {
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
  Fetch(classname:any,obj:any,type:any): any {
    /* <WeatherForecast[]>*/
    try {
      this.http.get(this.api + "?classname=" + classname+"&obj=" + obj + "&type=" + type, httpOptions).subscribe(
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

  Insert(classname: any, obj: any, type: any): any {
    /* <WeatherForecast[]>*/
    this.http.get(this.api + "?classname=" + classname + "&obj=" + obj + "&type=" + type, httpOptions).subscribe(
      (response) => {
        try {
          this.result = JSON.parse(response.toString());
        } catch (e) {
          console.error('Failed to parse JSON response', e);
          this.result = null;
        }
      },
      (error) => {
        console.error('API Error:', error);
      }
    );

    return this.result;
  }
  Update(classname: any, obj: any, type: any): any {
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


  Search(classname: any, obj: any, type: any): any {
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


