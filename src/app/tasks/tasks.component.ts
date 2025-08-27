import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { TasksProps } from './task/task.model';


  let contador = 0;
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;

  tasks: TasksProps[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the basic and advanced concepts of Angular.',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Learn TypeScript',
      summary: 'Understand the basics of TypeScript.',
      dueDate: '2025-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Build Angular App',
      summary: 'Create a new Angular application from scratch.',
      dueDate: '2025-12-31'
    }
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask() {
    let i: string = (this.tasks.length + 1).toString();
    contador = ++contador;
    this.tasks.push({
      id: 'u' + i,
      userId: this.userId,
      title: 'New Task' + contador,
      summary: 'Description of the new task.' + contador,
      dueDate: '2025-12-31'
    });
  }
}
