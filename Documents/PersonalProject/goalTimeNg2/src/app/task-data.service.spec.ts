import { TestBed, inject } from '@angular/core/testing';

import { TaskDataService } from './task-data.service';
// import {setBaseTestProviders} from '@angular/core/testing';
// import {TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS} from '@angular/platform-browser-dynamic/testing';
import { Task } from './task';

// setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);


describe('TaskDataService', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TaskDataService]
		});
	});

	it('should ...', inject([TaskDataService], (service: TaskDataService) => {
		expect(service).toBeTruthy();
	}));

});

describe('#getTasks()', () => {
	
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TaskDataService]
		});
	});

	it('should return an empty array by default', inject([TaskDataService], (service: TaskDataService) => {
		expect(service.getTasks()).toEqual([]);
	}));

	it('should return all tasks', inject([TaskDataService], (service: TaskDataService) => {
		let task1 = new Task({
			name: 'testName1',
			description: 'testDescription1',
			goal: 'testGoal1',
			priority: 1,
			status: 'testStatus1',
			startTime: '2017-03-15',
			endTime: '2017-03-15',
			archived: false,
			userName: 'user1'
		});
		let task2 = new Task({
			name: 'testName2',
			description: 'testDescription2',
			goal: 'testGoal2',
			priority: 1,
			status: 'testStatus2',
			startTime: '2017-03-17',
			endTime: '2017-03-18',
			archived: false,
			userName: 'user1'
		});
		service.addTask(task1);
		service.addTask(task2);
		expect(service.getTasks()).toEqual([task1, task2]);
	}));
});

describe('#save(task)', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TaskDataService]
		});
	});

	it('should automatically assign an incrementing id', inject([TaskDataService], (service: TaskDataService) => {
		let task1 = new Task({
			name: 'testName1',
			description: 'testDescription1',
			goal: 'testGoal1',
			priority: 1,
			status: 'testStatus1',
			startTime: '2017-03-15',
			endTime: '2017-03-15',
			archived: false,
			userName: 'user1'
		});
		let task2 = new Task({
			name: 'testName',
			description: 'testDescription2',
			goal: 'testGoal2',
			priority: 1,
			status: 'testStatus2',
			startTime: '2017-03-17',
			endTime: '2017-03-18',
			archived: false,
			userName: 'user1'
		});
		service.addTask(task1);
		service.addTask(task2);
		expect(service.getTaskById(1)).toEqual(task1);
		expect(service.getTaskById(2)).toEqual(task2);
	}));
});

describe('#updateTaskById(id, values)', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TaskDataService]
		});
	});

	it('should return task with the corresponding id and updated values', inject([TaskDataService], (service: TaskDataService) => {
		let task = new Task({
			name: 'testName1',
			description: 'testDescription1',
			goal: 'testGoal1',
			priority: 1,
			status: 'testStatus1',
			startTime: '2017-03-15',
			endTime: '2017-03-15',
			archived: false,
			userName: 'user1'
		});
		service.addTask(task);
		let taskToUpdate = service.updateTaskById(1, {
			priority: 2
		});
		expect(taskToUpdate.priority).toEqual(2);
	}));

	it('should return null if task is not found', inject([TaskDataService], (service: TaskDataService) => {
		let task = new Task({
			name: 'testName1',
			description: 'testDescription1',
			goal: 'testGoal1',
			priority: 1,
			status: 'testStatus1',
			startTime: '2017-03-15',
			endTime: '2017-03-15',
			archived: false,
			userName: 'user1'
		});
		service.addTask(task);

		// A second task has not been added to taskList so lastId = 1 and no task with id = 2 exists
		let taskToUpdate = service.updateTaskById(2, {
			title: 'new title'
		});
		expect(taskToUpdate).toEqual(null);
	}));
});

describe('#archiveTaskById(id)', () => {

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TaskDataService]
		});
	});

	it('should return task with the corresponding id and archived: true status', inject([TaskDataService], (service: TaskDataService) => {
		let task = new Task({
			name: 'testName1',
			description: 'testDescription1',
			goal: 'testGoal1',
			priority: 1,
			status: 'testStatus1',
			startTime: '2017-03-15',
			endTime: '2017-03-15',
			archived: false,
			userName: 'user1'
		});
		service.addTask(task);
		let taskToArchive = service.archiveTaskById(1, {
			archived: true
		});
		expect(taskToArchive.archived).toEqual(true);
	}));

	it('should return null if task is not found', inject([TaskDataService], (service: TaskDataService) => {
		let task = new Task({
			name: 'testName1',
			description: 'testDescription1',
			goal: 'testGoal1',
			priority: 1,
			status: 'testStatus1',
			startTime: '2017-03-15',
			endTime: '2017-03-15',
			archived: false,
			userName: 'user1'
		});
		service.addTask(task);

		// A second task has not been added to taskList so lastId = 1 and no task with id = 2 exists
		let taskToArchive = service.archiveTaskById(2, {
		});
		expect(taskToArchive).toEqual(null);
	}));

});

