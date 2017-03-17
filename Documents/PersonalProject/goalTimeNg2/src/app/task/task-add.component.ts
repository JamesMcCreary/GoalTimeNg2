import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
import { TaskDataService } from '../task-data.service';
import { Task } from '../task';
import { Router } from '@angular/router';
import 'rxjs/Rx';


@Component({
	selector: 'app-task-add',
	templateUrl: './task-add.component.html',
	providers: [TaskDataService]
})
export class TaskAddComponent {
	addTaskForm: any;
	//private taskDataService: TaskDataService;
	private responseFromAddTask: string;
	private responseFromAddTaskAklert: string;


	constructor(private taskDataService: TaskDataService, private router: Router, private formBuilder: FormBuilder) {
		this.addTaskForm = this.formBuilder.group({
			'taskName': ['', Validators.required],
			'taskDescription': ['', Validators.required],
			'taskGoal': ['', Validators.required],
			'taskPriority': ['', Validators.required],
			'taskStatus': ['', Validators.required],
			'taskStartTime': ['', Validators.required],
			'taskEndTime': ['', Validators.required],
			'taskArchived': ['']
		});

		console.log(this.addTaskForm);
	}



	addTask() {
		this.taskDataService.addTask(this.addTaskForm.taskName, this.addTaskForm.taskDescription, this.addTaskForm.taskGoal,
								this.addTaskForm.taskPriority, this.addTaskForm.taskStatus, this.addTaskForm.taskStartTime,
								this.addTaskForm.taskEndTime, this.addTaskForm.taskArchived)
							.subscribe(
								stringResponse => this.responseFromAddTask = stringResponse,
								error => console.log(error),
								() => console.log(this.responseFromAddTask)
							);

	}

	addTaskAklert() {
		this.taskDataService.addTaskAklert()
							.subscribe(
								data => this.responseFromAddTaskAklert = JSON.stringify(data),
								error => alert(error),
								() => console.log(this.responseFromAddTaskAklert)
							);
		
	}

	testing() {
		console.log("testing() reached");
		this.onNavigate();
	}
	onNavigate() {
		this.router.navigate(['/httpResult']);


	}

	testResponse() {
		this.taskDataService.testResponse();
	}
	// addTaskAlert() {
	// 	if(this.addTaskForm.dirty && this.addTaskForm.valid) {
	// 		alert('Task Name: ${this.addTaskForm.value.taskName} was successfully added!');
	// 	}
	// }

}
