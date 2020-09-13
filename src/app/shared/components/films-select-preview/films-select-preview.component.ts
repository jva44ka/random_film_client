import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import Film from '../../../models/film';

@Component({
  selector: 'films-select-preview',
  templateUrl: './films-select-preview.component.html',
  styleUrls: ['./films-select-preview.component.scss']
})
export class FilmsSelectPreviewComponent implements OnInit {

  @Input() selectFilmFunc: () => Observable<Film[]>;

  films: Film[];
  isLodaing: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isLodaing = true;
    this.selectFilmFunc().subscribe(res => {
      this.films = res;
      this.isLodaing = false;
    })
  }

}
