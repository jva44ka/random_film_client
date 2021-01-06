import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-films-page',
  templateUrl: './liked-films-page.component.html',
  styleUrls: ['./liked-films-page.component.scss']
})
export class LikedFilmsPageComponent implements OnInit {
  public isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
