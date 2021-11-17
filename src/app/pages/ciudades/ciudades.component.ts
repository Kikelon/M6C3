import { Component, OnInit } from '@angular/core';
import { Ciudad } from 'src/app/models/ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  public ciudades : Ciudad[];
  columnsToDisplay = ["Ciudad", "Codigo", "Pais"];

  constructor() {

    this.ciudades = [];
    this.ciudades = [
      new Ciudad ("Madrid", "España", "MAD"),
      new Ciudad ("Roma", "Italia", "ROM"),
      new Ciudad ("Auckland", "Nueva Zelanda", "AUK"),
      new Ciudad ("Amsterdam", "Holanda", "AMS"),
      new Ciudad ("Nueva York", "Estados Unidos", "NYC"),
      new Ciudad ("Port Au Prince", "Haiti", "PAP"),
      new Ciudad ("Quito", "Ecuador", "UIO"),
      new Ciudad ("Santander", "España", "SDR"),
      new Ciudad ("Sofía", "Bulgaria", "SOF"),
      new Ciudad ("Dubai", "Emiratos Árabes", "DXB"),
    ]
  }

  ngOnInit(): void {
  }

}
