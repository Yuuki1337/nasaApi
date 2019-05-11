import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private _http: HttpClient) { }

  getImageOfTheDay(): Observable<string> {
    let years = new Date().getFullYear()
    let months = new Date().getMonth() + 1
    let days = new Date().getDate()
    return this._http.get<string>(`https://api.nasa.gov/planetary/apod?date=${years}-${months}-${days}&api_key=Ai0uxYTSwiuGYHm5xxzjPZYRmhkMMzUwGkbwx9VS&hd=true`)
  }
}
