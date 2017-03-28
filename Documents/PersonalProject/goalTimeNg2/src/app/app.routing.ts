import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header.component';
import { TaskAddComponent } from './task/task-add.component';
import { HttpResultComponent } from './task/http-result.component';
import { TaskListComponent } from './task/task-list.component';
import { TaskDetailComponent } from './task/task-detail.component';
import { SignupComponent } from './security/signup.component';
import { LoginComponent } from './security/login.component';
import { AuthGuard } from './_guards/auth.guard';

// import { RecipesComponent } from "./recipes/recipes.component";
// import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
// import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'addTask', component: TaskAddComponent, canActivate: [AuthGuard]},
  {path: 'taskList', component: TaskListComponent, canActivate: [AuthGuard]},
  {path: 'httpResult', component: HttpResultComponent },
  {path: 'task/:id', component: TaskDetailComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
 