import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Task } from './task';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import {Router, ActivatedRoute, Params} from '@angular/router';


@Injectable()
export class TaskDataService {

  constructor(private http: Http, private activatedRoute: ActivatedRoute) {
  }


  //constructor( @Inject('dataService') dataService, @Inject(Http) http)

  addTaskAlertReturnString: String;
  taskToAdd: Task;


  getTasks() {
    return this.http.get(`http://localhost:8080/getTasks`)
                    .map(response => <Task[]> response.json())
                    .catch(this.handleError);
  }

  getTaskById(id: String) {
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('id', 'id');

    return this.http.get('http://localhost:8080/getTaskById/?id=${id}')
                    .map(response => response.json().data as Task[]);
  }

  ngOnInit() {
  //   this.activatedRoute.params.subscribe((params: Params) => {
  //     let taskId = params['taskId'];
  //     console.log(taskId);
  //   });
  }




//   let params: URLSearchParams = new URLSearchParams();
// params.set('var1', val1);
// params.set('var2', val2);

// let requestOptions = new RequestOptions();
// requestOptions.search = params;

// this.http.get(StaticSettings.BASE_URL, requestOptions)
//     .toPromise()
//     .then(response => response.json())
// ...


  addTask(taskToAdd: Task) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let dummyUserName = "user1";


    // this.taskToAdd = new Task(taskName, taskDescription, taskGoal, taskPriority, taskStatus, taskStartTime,
    //                 taskEndTime, taskArchived, dummyUserName);

     // const body = JSON.stringify({taskName, taskDescription, taskGoal, taskPriority, taskStatus,
     //  taskStartTime, taskEndTime, taskArchived, dummyUserName })


let options = new RequestOptions({ headers: headers });

    // return this.http.post('http://localhost:8080/addTask', body, headers)
    return this.http.post('http://localhost:8080/addTask', taskToAdd, options)
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
