import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PaymentsComponent} from "./payments/payments.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {StudentsComponent} from "./students/students.component";
import {AuthGuard} from "./guards/auth.guard";

import {StudentsDetailsComponent} from "./students-details/students-details.component";
import {NewPaymentComponent} from "./new-payment/new-payment.component";
import {PaymentsDetailsComponent} from "./payments-details/payments-details.component";

const routes: Routes = [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      {path:"admin",component:AdminTemplateComponent,
        canActivate:[AuthGuard],
        children:[
          { path: "home", component: HomeComponent },
          { path: "profile", component: ProfileComponent },
          { path: "loadStudents", component: LoadStudentsComponent,
           // canActivate:[AuthorizationGuard],data:{roles :['ADMIN']}
          },
          { path: "loadPayments", component: LoadPaymentsComponent,
          //  canActivate:[AuthorizationGuard],data:{roles :['ADMIN']}
          },
          { path: "payments", component:PaymentsComponent},
          {path:"students-details/:code",component:StudentsDetailsComponent},
          {path:"new-payment/:studentCode",component:NewPaymentComponent},
          {path:"payments-details/:id",component:PaymentsDetailsComponent},
          { path: "dashboard", component: DashboardComponent },
          {path:"students",component:StudentsComponent}

        ]},


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
