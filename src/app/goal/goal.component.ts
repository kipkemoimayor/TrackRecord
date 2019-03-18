import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals=[
    new Goal(1,"Watch finding Nemo","Find an online Version and watch Merlin"),
    new Goal(2,"Buy Cookies","I have to buy Cookies for my guys"),
    new Goal(3,"Get a baby","I need get the right woman to give me the baby"),
    new Goal(4,"Get a job","Have to find one in google"),
    new Goal(5,"Create a new awesome app","Javascript myself to fame")
  ];


  constructor() { }

  ngOnInit() {
  }

}
