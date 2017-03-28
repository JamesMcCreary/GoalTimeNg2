export class User {

	id: string;
	username: string;
	password: string = '';
	enabled: boolean;

	constructor(
		id: string,
		username: string,
		password: string,
		enabled: boolean
	){}
}