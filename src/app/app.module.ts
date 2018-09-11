import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicZoneComponent } from './page/public-zone/public-zone.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { PhoneLoginComponent } from './page/phone-login/phone-login.component';
import { PrivateZoneComponent } from './page/private-zone/private-zone.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CaloriesComponent } from './page/calories/calories.component';
import { FoodComponent } from './page/food/food.component';
import { FoodListComponent } from './page/food-list/food-list.component';
import { SleepComponent } from './page/sleep/sleep.component';
import { WeightComponent } from './page/weight/weight.component';
import { ProfileComponent } from './page/profile/profile.component';
import { DashboardItemComponent } from './component/dashboard-item/dashboard-item.component';
import { TrimCreditCardPipe } from './pipe/trim-credit-card.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './page/project/project.component';
import { ProjectFormComponent } from './page/project-form/project-form.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CarouselModule, BsDatepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PublicZoneComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PhoneLoginComponent,
    PrivateZoneComponent,
    DashboardComponent,
    CaloriesComponent,
    FoodComponent,
    FoodListComponent,
    SleepComponent,
    WeightComponent,
    ProfileComponent,
    DashboardItemComponent,
    TrimCreditCardPipe,
    ProjectComponent,
    ProjectFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    CarouselModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
