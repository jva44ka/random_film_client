import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import Film from '../../../models/film';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'films-carousel',
  templateUrl: './films-carousel.component.html',
  styleUrls: ['./films-carousel.component.scss']
})
export class FilmsCarouselComponent {

  @Input() films: Film[];

  moveLeftDisabled: boolean = true;
  moveRightDisabled: boolean = true;

  @Output() filmClicked: EventEmitter<Film> = new EventEmitter<Film>();

  @ViewChild('carousel', {read: DragScrollComponent}) carousel: DragScrollComponent;

  moveLeft() {
    this.carousel.moveLeft();
  }

  moveRight() {
    this.carousel.moveRight();
  }

  click(film: Film): void {
    this.filmClicked.emit(film);
  }

  drugStart(): void {
    //console.log('Drug start');
  }

  drugEnd(): void {
    //console.log('Drug end');
  }
}
