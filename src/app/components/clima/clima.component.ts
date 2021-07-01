import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  Clima:any;

  constructor() { }

  ngOnInit(): void {
  }

  traerClima(){
    let data = JSON.parse('api.openweathermap.org/data/2.5/forecast?id=524901&appid={693045bd88ecf1f2aee132e95a29e516}')
  }

}
