import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	providers: [TaskDataService]
})
export class TaskListComponent implements OnInit {
	private taskList =[];


	constructor(private taskDataService: TaskDataService) { 
		this.taskDataService.getTasks()
		.subscribe(
			taskResponse => this.taskList = taskResponse,
			error => console.log(error),
			() => console.log("The following taskList was retrieved: ", this.taskList)
		);
	}


ngOnInit() {
}

}
