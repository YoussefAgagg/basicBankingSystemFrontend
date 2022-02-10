import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {

  public customer!: Customer;
  private id: string |null;
 

  constructor( private customerService:CustomerService,private _Activatedroute:ActivatedRoute,private router: Router) {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.getCustomer()
  }
  public getCustomer():void{

    this.customerService.getCustomer(this.id).subscribe(
      {
        next:(response:Customer)=>{
          this.customer=response;
          console.log(response);
        },
        error: (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      }
    );
  }
  public transferMony(id:number):void{
    this.router.navigate(['/transfer',id]);

  }


}
