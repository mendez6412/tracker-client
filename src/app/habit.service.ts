import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habit } from './habit.model';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  constructor(private http: HttpClient) { }

  private habitsUrl = 'https://nestjs-tracker-api.glitch.me/habits';

  getHabits() {
    return this.http.get<Habit[]>(this.habitsUrl);
  }

  createHabit(habit: { name: string, date: string }) {
    return this.http.post<Habit>(this.habitsUrl, habit);
  }

  incrementHabit(id: number) {
    return this.http.patch<Habit>(`${this.habitsUrl}/${id}`, null);
  }
}
