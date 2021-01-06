import {Component, Input} from '@angular/core';
import Film from '../../../../models/film';

@Component({
  selector: 'film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.scss']
})
export class FilmListItemComponent {
  @Input() film: Film;
}
