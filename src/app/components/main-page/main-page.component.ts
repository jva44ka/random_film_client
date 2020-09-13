import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalWindowComponent} from '../../shared/components/modal-window/modal-window.component';
import {IModalWindowOptions} from '../../shared/components/modal-window/modal-window-options';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  filmModalsOptions: IModalWindowOptions = {
    width: "50%",
    height: "50%",
    title: "Выбор фильма",
    containsForm: true,
    isConfirmation: true,
    disableClose: false,
    crossMark: true,
  };

  specFilmModalOptions: IModalWindowOptions = {
    ...this.filmModalsOptions,
    title: "Подбор по предпочтениям"
  };

  randFilmModalOptions: IModalWindowOptions = {
    ...this.filmModalsOptions,
    title: "Рандомный подбор"
  };

  @ViewChild('randomFilmModal')
  randomFilmModal: ModalWindowComponent;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }

  selectRandomFilm(): void {
    this.randomFilmModal?.openDialog();
  }
}
