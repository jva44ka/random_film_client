import {Component, Input} from '@angular/core';
import Film from '../../../models/film';

@Component({
  selector: 'films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent {
  @Input() films: Film[];
}
