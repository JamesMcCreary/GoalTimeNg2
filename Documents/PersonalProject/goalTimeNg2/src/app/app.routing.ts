import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header.component';
import { TaskAddComponent } from './task/task-add.component';


// import { RecipesComponent } from "./recipes/recipes.component";
// import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
// import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: WelcomeComponent},
  {path: 'addTask', component: TaskAddComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
