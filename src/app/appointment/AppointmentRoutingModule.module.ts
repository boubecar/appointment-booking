// appointment-routing.module.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InfoFormComponent } from './info-form/info-form.component';
import { SummaryComponent } from './summary/summary.component';
import { ReceiptComponent } from './receipt/receipt.component';
 

const appointmentRoutes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'info-form', component: InfoFormComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'receipt', component: ReceiptComponent },
];

@NgModule({
  imports: [RouterModule.forChild(appointmentRoutes)],
  exports: [RouterModule],
})
export class AppointmentRoutingModule {}
