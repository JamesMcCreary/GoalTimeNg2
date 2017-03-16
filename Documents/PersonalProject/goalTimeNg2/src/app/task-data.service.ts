import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()
export class TaskDataService {


  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

    // Array to hold task objects
  taskList: Task[] = [];


  constructor() { }


  // Get all Tasks; GET request; Path: '/tasks'
  getTasks(): Task[] {
    return this.taskList;
  }

  // Get Task by its ID; GET request; Path: '/getTaskById/{id}''
  getTaskById(id: number): Task {
    return this.taskList
      .filter(task => task.id === id)
      .pop();
  }

  // Add Task; POST request; Path: '/addTask'
  addTask(task: Task): TaskDataService {

  	// If the task id does not already exist in the taskList, then increment the lastId counter to create a new unique task id
    if (!task.id) {
      task.id = ++this.lastId;
    }
    this.taskList.push(task);
    return this;
  }

  // Update Task; PUT request; Path: '/updateTask/:id'
  updateTaskById(id: number, values: Object = {}): Task {
    let task = this.getTaskById(id);
    if (!task) {
      return null;
    }
    Object.assign(task, values);
    return task;
  }

  // Archive Task; PUT request; Path: '/archiveTask/:id'
  archiveTaskById(id: number, values: Object = {}): Task {
  	let task = this.getTaskById(id);
  	if (!task) {
  		return null;
  	}
  	let taskToUpdate = this.updateTaskById(task.id, {
  		archived: !task.archived
  	});
  	return taskToUpdate;
  }
}
