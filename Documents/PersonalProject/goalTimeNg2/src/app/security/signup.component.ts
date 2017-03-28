// =========================== BEGIN MY ORIGINAL CODE ===========================
// import { Component, OnInit } from "@angular/core";
// import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styles: []
// })
// export class SignupComponent implements OnInit {
//     myForm: FormGroup;
//     error = false;
//     errorMessage = '';

//     constructor(private formBuilder: FormBuilder) {
//     }

//     onSignup() {

//     }

//     ngOnInit(): any {
//         this.myForm = this.formBuilder.group({
//             email: ['', Validators.compose([
//                 Validators.required,
//                 this.isEmail
//             ])],
//             password: ['', Validators.required],
//             confirmPassword: ['', Validators.compose([
//                 Validators.required,
//                 this.isEqualPassword.bind(this)
//             ])],
//         });
//     }

//     isEmail(control: FormControl): {[s: string]: boolean} {
//         if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
//             return {noEmail: true};
//         }
//     }

//     isEqualPassword(control: FormControl): {[s: string]: boolean} {
//         if (!this.myForm) {
//             return {passwordsNotMatch: true};

//         }
//         if (control.value !== this.myForm.controls['password'].value) {
//             return {passwordsNotMatch: true};
//         }
//     }
// }
// =========================== END MY ORIGINAL CODE ===========================

import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html'
})
 
export class SignupComponent {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
    signup() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}
