import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadStudentsComponent } from './load-students/load-students.component';

import { LoginComponent } from './login/login.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaymentsComponent } from './payments/payments.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuItem, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatListItem, MatListModule} from "@angular/material/list";
import { MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {MatTableModule} from "@angular/material/table";
import { CdkTableModule} from "@angular/cdk/table";
import {HttpClientModule} from "@angular/common/http";
import { MatPaginatorModule} from "@angular/material/paginator";
import { MatSortModule} from "@angular/material/sort";
import { StudentsDetailsComponent } from './students-details/students-details.component';
import {MatButtonToggleGroup} from "@angular/material/button-toggle";
import { NewPaymentComponent } from './new-payment/new-payment.component';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import { PaymentsDetailsComponent } from './payments-details/payments-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminTemplateComponent,
    HomeComponent,
    ProfileComponent,
    LoadStudentsComponent,
    LoginComponent,
    LoadPaymentsComponent,
    StudentsComponent,
    DashboardComponent,
    PaymentsComponent,
    StudentsDetailsComponent,
    NewPaymentComponent,
    PaymentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatMenuTrigger,
    MatMenuItem,
    MatSidenavModule,
    MatDrawerContainer,
    MatListModule,
    MatListItem,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    CdkTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonToggleGroup,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    PdfViewerModule,
    MatProgressSpinner
  ],
  providers: [
    provideAnimationsAsync(),AuthGuard,AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
