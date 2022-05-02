import { Component, OnInit } from '@angular/core';

import { MENU } from 'src/app/mock-menu';


@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  menus = MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
