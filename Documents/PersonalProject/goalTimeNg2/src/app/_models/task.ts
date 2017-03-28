export class Task {

	id: number;
	name: string = '';
	description: string;
	goal: string;
	priority: number;
	status: string;
	startTime: string;
	endTime: string;
	archived: boolean;
	userName: string;

	// constructor(values: Object = {}) {
 //    	Object.assign(this, values);
 //  }

    constructor(
		name: string = '',
		description: string,
		goal: string,
		priority: number,
		status: string,
		startTime: string,
		endTime: string,
		archived: boolean,
		userName: string
     ){}
}