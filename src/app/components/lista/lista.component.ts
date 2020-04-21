import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  items:any;

  constructor(private conexion: ConexionService) { 
    conexion.getItems().subscribe((data) => {
      this.items = data;
    }); 
  }

  ngOnInit() {
  }

}
