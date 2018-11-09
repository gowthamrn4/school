import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import {StudentComponent} from './student/student.component';
import {SignupComponent} from './signup/signup.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { IncommingtransferComponent } from './incommingtransfer/incommingtransfer.component';
import { OutgoingtransferComponent } from './outgoingtransfer/outgoingtransfer.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { EditstudentComponent } from './editstudent/editstudent.component';
import { ListoutgoingtransferComponent } from './listoutgoingtransfer/listoutgoingtransfer.component';
import { ApporvedComponent } from './apporved/apporved.component';

import {DataService} from './../app/service/data';
import {AuthService} from './../app/service/auth';
import { ViewtransferComponent } from './viewtransfer/viewtransfer.component';
import { ApprovedviewComponent } from './approvedview/approvedview.component';

var config = {
  apiKey: "AIzaSyD8d-WkpT0Ccopjxv0YxxJrrA3veuG_4zs",
  authDomain: "school-student-dd03a.firebaseapp.com",
  databaseURL: "https://school-student-dd03a.firebaseio.com",
  projectId: "school-student-dd03a",
  storageBucket: "school-student-dd03a.appspot.com",
  messagingSenderId: "189468088775"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    SignupComponent,
    LandingpageComponent,
    ListstudentComponent,
    IncommingtransferComponent,
    OutgoingtransferComponent,
    ViewstudentComponent,
    EditstudentComponent,
    ListoutgoingtransferComponent,
    ApporvedComponent,
    ViewtransferComponent,
    ApprovedviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    HttpModule,
    RouterModule.forRoot([
    {path:'login',component:LoginComponent},
    {path:'',pathMatch:'full',redirectTo:'login'},
    {path:'signup',component:SignupComponent},
    {path:'app',component:LandingpageComponent,
    children:[
      {path:'',pathMatch:'full',redirectTo:'student'},

      {path:"student",component:StudentComponent},
      {path:"liststudent",component:ListstudentComponent},
      {path:"incommingtransfer",component:IncommingtransferComponent},
      {path:"outgoingtransfer",component:OutgoingtransferComponent},
      {path:"viewstudent/:id",component:ViewstudentComponent},
      {path:"editstudent/:id",component:EditstudentComponent},
      {path:"listoutgoingtransfer",component:ListoutgoingtransferComponent},
      {path:"approved",component:ApporvedComponent},
      {path:"viewtransfer/:id",component:ViewtransferComponent},
      {path:"approvedview/:id",component:ApprovedviewComponent}
    ]
    }
    ])
  ],
  providers: [DataService,
    AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
