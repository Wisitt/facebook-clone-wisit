import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeNavIndex: number = -1;

  constructor() { }

  ngOnInit(): void {}

  active(index: number) {
    this.activeNavIndex = index;
  }
}
