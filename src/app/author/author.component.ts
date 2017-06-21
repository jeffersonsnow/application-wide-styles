import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styles: [`
    h1 {
      margin: 0;
      font-size: 12px;
      /*color: #8c8c8c; */
    }
  `],
  encapsulation: ViewEncapsulation.Emulated // this is the default
  // encapsulation: ViewEncapsulation.Native // doesn't run in anything but chrome right now
  // encapsulation: ViewEncapsulation.None // not really useful
})
export class AuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
