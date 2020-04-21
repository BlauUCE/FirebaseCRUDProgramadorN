import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  item:any = {name: ''};

  constructor(private conexion: ConexionService) { 

  }

  ngOnInit() {
  }

  addItem() {
    this.conexion.addItem(this.item);
    this.item.name = "";
  }

}
