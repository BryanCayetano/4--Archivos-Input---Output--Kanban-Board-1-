import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea | null;

  constructor() {
    this.tarea = null;
  }

  ngOnInit(): void {}

  detectarFecha() {
    if (this.tarea?.fechaFin != null) {
      var sinCaducar = 'sinCaducar';
      var caducado = 'caducado';
      var gris = 'gris';

      let fechaActual: Date = new Date();
      var fechaComparar: Date = new Date(this.tarea.fechaFin);

      let fechaAdeltada = new Date(
        fechaActual.setDate(fechaActual.getDate() + 1)
      );

      if (
        fechaActual.getUTCDate() == fechaComparar.getUTCDate() &&
        fechaActual.getUTCFullYear() == fechaComparar.getUTCFullYear() &&
        fechaActual.getUTCMonth() == fechaComparar.getUTCMonth() &&
        fechaActual.getUTCDay() == fechaComparar.getUTCDay()
      ) {
        return gris;
      } else if (fechaActual.getTime() > fechaComparar.getTime()) {
        return caducado;
      } else if (fechaActual.getTime() < fechaComparar.getTime()) {
        return sinCaducar;
      }
    }
    return null;
  }
}
