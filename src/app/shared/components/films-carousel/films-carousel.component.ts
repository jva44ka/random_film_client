import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import Film from '../../../models/film';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'films-carousel',
  templateUrl: './films-carousel.component.html',
  styleUrls: ['./films-carousel.component.scss']
})
export class FilmsCarouselComponent implements OnInit {

  @Input() films: Film[];

  moveLeftEnabled: boolean = false;
  moveRightEnabled: boolean = false;

  @Output() filmClicked: EventEmitter<Film> = new EventEmitter<Film>();

  @ViewChild('carousel', {read: DragScrollComponent}) ds: DragScrollComponent;

  constructor() { }

  ngOnInit(): void {

  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  click(film: Film): void {
    this.filmClicked.emit(film);
  }
}
