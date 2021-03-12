import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  mapa: any
  marcador: any
  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('posicionMapa').setView([39.3915897309285, -3.221885744466565], 16)
    L.marker([39.3915897309285, -3.221885744466565]).addTo(this.mapa).bindPopup('El Institulo.<br> Los mejores.')
    .openPopup();
    const trozos = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 19
    })
    trozos.addTo(this.mapa)
    
  }

}
