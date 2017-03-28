// ======================= BEGIN MY ORIGINAL CODE ======================= 

// import { Component, OnInit } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { UserService } from "../user.service"

// @Component({
// 	selector: 'app-login',
// 	templateUrl: './login.component.html',
// 	providers: [UserService]	
// })
// export class LoginComponent implements OnInit {

// 	myForm: FormGroup;
// 	error = false;
// 	errorMessage = '';
// 	private usersList =[];

// 	constructor(private fb: FormBuilder, private userService: UserService) {
// 		this.userService.getUsers()
// 		.subscribe(
// 			usersResponse => this.usersList = usersResponse,
// 			error => console.log(error),
// 			() => console.log("The following usersList was retrieved: ", this.usersList)
// 			);
// 	}

// 	onLogin() {

// 	}

// 	ngOnInit():any {
// 		this.myForm = this.fb.group({
// 			username: ['', Validators.required],
// 			password: ['', Validators.required],
// 		});
// 	}

// }

// ======================= End MY ORIGINAL CODE ======================= 

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { AlertService } from '../alert.service';
import { AuthenticationService } from './authentication.service';
 
@Component({
 	selector: 'app-login',
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        console.log("The this.model.username, this.model.password are: ", this.model.username, this.model.password);
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}











