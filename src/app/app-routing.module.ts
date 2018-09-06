import { AuthGuard } from './share/auth.guard';
import { ProjectComponent } from './page/project/project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './page/profile/profile.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { FoodComponent } from './page/food/food.component';
import { CaloriesComponent } from './page/calories/calories.component';
import { PhoneLoginComponent } from './page/phone-login/phone-login.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HomeComponent } from './page/home/home.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { SleepComponent } from './page/sleep/sleep.component';
import { WeightComponent } from './page/weight/weight.component';
import { ProjectFormComponent } from './page/project-form/project-form.component';

const routes: Routes = [
{
  path: '',
  component: PublicZoneComponent,
  children : [{
    path: '', component: HomeComponent
  }, {
    path: 'login', component: LoginComponent
  }, {
    path: 'register', component: RegisterComponent
  }, {
    path: 'phone-login', component: PhoneLoginComponent
  }, {
    path: 'project', component: ProjectComponent
  }, {
    path: 'project-form/:pkCode', component: ProjectFormComponent
  }]
}, {
  path: 'admin',
  component: PrivateZoneComponent,
  canActivate : [AuthGuard],
  children: [{
    path: '', component: DashboardComponent
  }, {
    path: 'calories', component: CaloriesComponent
  }, {
    path: 'food', component: FoodComponent
  }, {
    path: 'food-list', component: FoodListComponent
  }, {
    path: 'sleep', component: SleepComponent
  }, {
    path: 'weight', component: WeightComponent
  }, {
    path: 'profile', component: ProfileComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
