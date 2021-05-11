import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit.model';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-container',
  templateUrl: './habit-container.component.html',
  styles: [
  ]
})
export class HabitContainerComponent implements OnInit {

  constructor(private habitService: HabitService) { }

  habits: Habit[] = [];
  todaysHabit: Habit | null = null;


  getHabits(): void {
    this.habitService.getHabits().subscribe(habits => {
      this.habits = habits;
      if (this.habits.length > 0) {
        this.todaysHabit = this.habits[0];
      }
    });
  }

  onIncrementClick(): void {
    console.log('hello')
    if (!this.todaysHabit) {
      this.habitService.createHabit({ name: 'cough', date: new Date().toLocaleDateString() }).subscribe(habit => {
        this.todaysHabit = habit;
      });
    } else {
      this.habitService.incrementHabit(this.todaysHabit.id).subscribe(habit => {
        this.todaysHabit = habit;
      });
    }
  }
  
  ngOnInit(): void {
    this.getHabits();
  }

}
