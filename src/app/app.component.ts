import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nasaAPI';

  public imgOfTheDay : string =""


  constructor(private nasaApi:NasaService){}

  ngOnInit(){

   
    this.nasaApi.getImageOfTheDay().subscribe(result => {
      this.imgOfTheDay = result
      
    })
 
  }
}
