import {Task} from './task';

describe('Task', () => {
	it('should create an instance', () => {
	expect(new Task()).toBeTruthy();
	});

	it('should accept values in the constructor', () => {
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
		expect(task.name).toEqual('testName1');
		expect(task.description).toEqual('testDescription1');
		expect(task.goal).toEqual('testGoal1');
		expect(task.priority).toEqual(1);
		expect(task.status).toEqual('testStatus1');
		expect(task.startTime).toEqual('2017-03-15');
		expect(task.endTime).toEqual('2017-03-15');
		expect(task.archived).toEqual(false);
		expect(task.userName).toEqual('user1');
	});
});
