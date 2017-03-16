import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
	selector: 'app-task-add',
	templateUrl: './task-add.component.html'
})
export class TaskAddComponent {
	addTaskForm: any;


	constructor(private formBuilder: FormBuilder) {
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

	addTaskAlert() {
		if(this.addTaskForm.dirty && this.addTaskForm.valid) {
			alert('Task Name: ${this.addTaskForm.value.taskName} was successfully added!');
		}
	}

}
