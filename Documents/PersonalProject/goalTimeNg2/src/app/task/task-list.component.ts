import { Component, OnInit } from '@angular/core';
import { TaskDataService } from './task-data.service';
import { Task } from '../_models/task';
import { AuthenticationService } from '../security/authentication.service'

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html'
	//providers: [TaskDataService, AuthenticationService]
})
export class TaskListComponent implements OnInit {
	private taskList =[];
	private username: string;
	private password: string;
	private credentials;



	constructor(private taskDataService: TaskDataService, private authenticationService: AuthenticationService) { 

	this.credentials = this.authenticationService.getUsernameAndPassword;
	console.log("The credentials are: ", this.credentials);

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
