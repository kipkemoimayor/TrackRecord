import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals=[
    new Goal(1,"Watch finding Nemo","Find an online Version and watch Merlin",new Date(2019,3,14)),
    new Goal(2,"Buy Cookies","I have to buy Cookies for my guys",new Date(2019,1,24)),
    new Goal(3,"Get a baby","I need get the right woman to give me the baby",new Date(2020,8,25)),
    new Goal(4,"Get a job","Have to find one in google",new Date(2019,6,18)),
    new Goal(5,"Create a new awesome app","Javascript myself to fame",new Date(2019,10,14))
  ];
  toogleDetails(index){
    this.goals[index].showDescription=!this.goals[index].showDescription;
  }
  completeGoal(isComplete,index){
    if(isComplete){
      this.goals.splice(index,1)
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
