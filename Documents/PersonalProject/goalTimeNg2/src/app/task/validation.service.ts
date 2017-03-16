import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

	constructor() { }

	static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
		let config = {
			'required': `Required`,
			'minlength': `Minimum length ${validatorValue.requiredLength}`
		};

		return config[validatorName];
	} 
}

