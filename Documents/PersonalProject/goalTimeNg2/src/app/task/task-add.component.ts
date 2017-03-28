import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from './validation.service';
import { TaskDataService } from './task-data.service';
import { Task } from '../_models/task';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import {ToasterService} from 'angular2-toastr/index';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



@Component({
	selector: 'app-task-add',
	templateUrl: './task-add.component.html',
	providers: [TaskDataService, ToasterService, ToastyService]
})
export class TaskAddComponent {
	addTaskForm: FormGroup;
	//private taskDataService: TaskDataService;
	private responseFromAddTask: string;
	private responseFromAddTaskAklert: string;


	constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig, private taskDataService: TaskDataService, private router: Router, private formBuilder: FormBuilder) {
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
		this.toastyConfig.theme = 'bootstrap';

		console.log(this.addTaskForm);
	}



	addTask() {
		console.log(this.addTaskForm.value, this.addTaskForm.valid);

		this.taskDataService.addTask(this.addTaskForm.value)
		.subscribe(
			stringResponse => this.responseFromAddTask = JSON.stringify(stringResponse),
			error => console.log(error),
			() => console.log("The following task has been added: ", this.responseFromAddTask)
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

addToast() {
        // Just add default Toast with title only
        //this.toastyService.default('Hi there');
        // Or create the instance of ToastOptions
        var toastOptions:ToastOptions = {
            title: "Your task was successfully added",
            msg: "",
            showClose: true,
            timeout: 5000,
            theme: 'bootstrap',
            // onAdd: (toast:ToastData) => {
            //     console.log('Toast ' + toast.id + ' has been added!');
            // },
            // onRemove: function(toast:ToastData) {
            //     console.log('Toast ' + toast.id + ' has been removed!');
            // }
        };
        // Add see all possible types in one shot
       // this.toastyService.info(toastOptions);
        this.toastyService.success(toastOptions);
        // this.toastyService.wait(toastOptions);
        // this.toastyService.error(toastOptions);
        // this.toastyService.warning(toastOptions);
    }
 //    addToast() {
 //        // See all possible types in one shot.
 //        // pass parameters as (title:string, message:string, show_close_button:boolean, timeout:number)
 //        this.toaster.success('Task Added', 'Your task was successfully added.', true, 3000);
 //        // this.toaster.error('title', 'message', true, 2000);
 //        // this.toaster.info('title', 'message', true, 3000);
 //        // this.toaster.warning('title', 'message', true, 4000);
 //        // this.toaster.wait('title', 'message', true, 0);
 //    }
	
	// // addTaskAlert() {
	// 	// 	if(this.addTaskForm.dirty && this.addTaskForm.valid) {
	// 		// 		alert('Task Name: ${this.addTaskForm.value.taskName} was successfully added!');
	// 		// 	}
	// 		// }

		}
