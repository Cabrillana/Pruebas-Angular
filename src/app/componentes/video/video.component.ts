import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  enlaceEntrada:string
  idConvertido:string = ''
  urlVideo:SafeResourceUrl = ''

  //DomSanitizer nos permite usar URL capturadas por un input.
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  //Funcion que extrae el identificador del Video de Youtube.
  //Solución encontrada https://stackoverflow.com/questions/3452546/how-do-i-get-the-youtube-video-id-from-a-url
  obtenerId(): void {
    let ID:any = '';
    let url = this.enlaceEntrada.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    }
    else {
      ID = url;
    }
    this.idConvertido = ID;
  }

  //Función para abrir video.
  abrirVideo(): void {
    //Importante filtrar la URL por si se intenta intoducir código malicioso.
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.idConvertido);
  }
}
