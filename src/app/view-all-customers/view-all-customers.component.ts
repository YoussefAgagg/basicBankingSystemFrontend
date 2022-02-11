import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./styles.css']
})
export class ViewAllCustomersComponent implements OnInit {
  public customers: Customer[] = [];
  public showProgressBar=true;
  

  constructor( private customerService:CustomerService,private router: Router) { }

  ngOnInit(): void {
   
    this.getCustomers()
    
      

  }
  public getCustomers():void{

    this.customerService.getCustomers().subscribe(
      {
       
        next: (response:Customer[])=>{
         this.showProgressBar=false;
        this.customers=response;
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    } 
    );
  }
  public viewCustomerDetail(id:number):void{
    this.router.navigate(['/customers',id]);
  }

}
