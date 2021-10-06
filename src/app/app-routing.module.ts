import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
 {path : 'register',component: RegisterComponent},
 {path : '',component: LoginComponent},
 {path: 'transactionHistory' , component: TransactionsComponent},
 {path : 'dashboard' ,component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
