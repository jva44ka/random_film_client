import {Component, Input, OnInit} from '@angular/core';
import Film from '../../../models/film';

@Component({
  selector: 'film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.scss']
})
export class FilmListItemComponent implements OnInit {

  @Input() film: Film;

  constructor() { }

  ngOnInit(): void {
  }

}
