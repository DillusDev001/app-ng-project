import { Component } from '@angular/core';
import { Anuncio } from 'src/app/shared/interfaces/app/anuncio';
import { ArrayAnuncios } from 'src/app/shared/utils/examples/anuncio.array';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.component.html',
  styleUrls: ['./seccion1.component.css']
})
export class Seccion1Component {
  dataAnuncios = ArrayAnuncios;
}
