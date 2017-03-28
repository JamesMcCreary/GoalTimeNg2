import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskDataService } from './task-data.service';
import { Task } from '../_models/task';

@Component({
  selector: 'app-task-detail',
  template: `
    <p>
      task-detail Works!
    </p>
  `,
  providers: [TaskDataService]
})
export class TaskDetailComponent implements OnInit {

  task: Task[];

  constructor(private route: ActivatedRoute, private taskDataService: TaskDataService) { 
    console.log("The displayed task's id is: ", this.route.snapshot.params['id']);
    // this.taskDataService.getTaskById(this.route.snapshot.params['id'])
    //   .subscribe(
    //     taskResponse => this.task = taskResponse,
    //     error => console.log(error),
    //     () => console.log("The following task was retrieved: ", this.task)
    //   );
  }

  
 

  ngOnInit() {
        //console.log(this.route.snapshot.params['id']);

      // this.taskDataService
      //   .getTaskById(this.route.snapshot.params['id'])
      //   .subscribe(task => this.task = task);
  }
 

 // constructor(private taskDataService: TaskDataService) { 
 //    this.taskDataService.getTasks()
 //    .subscribe(
 //      taskResponse => this.taskList = taskResponse,
 //      error => console.log(error),
 //      () => console.log("The following taskList was retrieved: ", this.taskList)
 //    );
 //  }

}
