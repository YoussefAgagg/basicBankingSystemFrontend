import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllCustomersComponent } from './view-all-customers/view-all-customers.component';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';

const routes: Routes = [
  {path:"customers",component: ViewAllCustomersComponent},
  { path: 'customers/:id', component: CustomerDetailsComponent },
  { path: 'transfer/:id', component: TransferMoneyComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
