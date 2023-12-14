import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { FindDoctorComponent } from './components/find-doctor/find-doctor.component';
import { BookappointmentComponent } from './components/bookappointment/bookappointment.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'find-doctor',
    component: FindDoctorComponent,
  },
  {
    path: 'book-appointment',
    component: BookappointmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }