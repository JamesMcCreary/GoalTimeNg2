import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Task } from './task';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


@Injectable()
export class TaskDataService {
  constructor(private http: Http) {
  }
  //constructor( @Inject('dataService') dataService, @Inject(Http) http)

  addTaskAlertReturnString: String;


  getTasks() {
    return this.http.get(`http://localhost:8080/goaltime1/getTasks`)
                    .map(response => <Task[]> response.json())
                    .catch(this.handleError);

  }

  addTask(taskName: string, taskDescription: string, taskGoal: string, taskPriority: number, 
    taskStatus: string, taskStartTime: string, taskEndTime: string, taskArchived: boolean) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let dummyUserName = "user1";

    const body = JSON.stringify({taskName, taskDescription, taskGoal, taskPriority, taskStatus,
      taskStartTime, taskEndTime, taskArchived, dummyUserName })

    return this.http.post('http://localhost:8080/addTask', body, headers)
                    .map((response: Response) => response.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error!'));
  }

  addTaskAklert() {
    // this.addTaskAlertReturnString = "Test String";
    // return this.addTaskAlertReturnString;
     // return this.http.get('http://date.jsontest.com')
     //                 .map(response => response.json());

     return this.http.get('http://localhost:8080/addTask')
                     .map(response => response.json());
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

addTaskAlert():Observable<String[]>
{
  return this.http.get('http://localhost:8080/addTask')
                  .map((res: Response) => <String[]>res.json());
}

testResponse(){
  return "Hello!";
}
  // // Placeholder for last id so we can simulate
  // // automatic incrementing of id's
  // lastId: number = 0;

  //   // Array to hold task objects
  // taskList: Task[] = [];


  // constructor() { }


  // // Get all Tasks; GET request; Path: '/tasks'
  // getTasks(): Task[] {
    //   return this.taskList;
    // }

    // // Get Task by its ID; GET request; Path: '/getTaskById/{id}''
    // getTaskById(id: number): Task {
      //   return this.taskList
      //     .filter(task => task.id === id)
      //     .pop();
      // }

      // // Add Task; POST request; Path: '/addTask'
      // addTask(task: Task): TaskDataService {

        // 	// If the task id does not already exist in the taskList, then increment the lastId counter to create a new unique task id
        //   if (!task.id) {
          //     task.id = ++this.lastId;
          //   }
          //   this.taskList.push(task);
          //   return this;
          // }

          // // Update Task; PUT request; Path: '/updateTask/:id'
          // updateTaskById(id: number, values: Object = {}): Task {
            //   let task = this.getTaskById(id);
            //   if (!task) {
              //     return null;
              //   }
              //   Object.assign(task, values);
              //   return task;
              // }

              // // Archive Task; PUT request; Path: '/archiveTask/:id'
              // archiveTaskById(id: number, values: Object = {}): Task {
                // 	let task = this.getTaskById(id);
                // 	if (!task) {
                  // 		return null;
                  // 	}
                  // 	let taskToUpdate = this.updateTaskById(task.id, {
                    // 		archived: !task.archived
                    // 	});
                    // 	return taskToUpdate;
                    // }
                  }
