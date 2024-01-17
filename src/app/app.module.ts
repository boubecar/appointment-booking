import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesTypeComponent } from './services-type/services-type.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';
import { InfoFormComponent } from './appointment/info-form/info-form.component';
import { SummaryComponent } from './appointment/summary/summary.component';
import { ReceiptComponent } from './appointment/receipt/receipt.component';
import { AppointmentRoutingModule } from './appointment/AppointmentRoutingModule.module';

const appRoutes: Routes = [
  { path: 'appointment', component: AppointmentComponent },
 
  { path: 'services-type', component: ServicesTypeComponent },
  { path: '', component: ServicesListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServicesListComponent,
    ServicesTypeComponent,
    AppointmentComponent,
    InfoFormComponent,
    SummaryComponent,
    ReceiptComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    AppointmentRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
