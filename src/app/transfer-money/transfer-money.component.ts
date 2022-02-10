import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { TransferMonyService } from '../transfer-mony-service';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html'
})
export class TransferMoneyComponent implements OnInit {

  private id:any;
  public customers:Customer[]=[];
  public customer: any;
  public erorrmessag:any;
 

  constructor( private customerService:CustomerService,private _Activatedroute:ActivatedRoute, private transferMonyService:TransferMonyService,private router: Router) {
    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   }

  ngOnInit(): void {
    this.getCustomers()
  }
  public getCustomers():void{
    this.customerService.getCustomers().subscribe(
      {
        next: (response:Customer[])=>{
        this.customers=response;
        for(let i=0;i<this.customers.length;i++){
          if(this.customers[i].id==parseInt(this.id)){
            this.customer=this.customers.splice(i, 1).pop();
            console.log("found customer:",this.customer);
            break;
          }
        }
        console.log(response);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    } 
    );
      
  }
  onSubmit(value: any) {
    //get the value by its property
    console.log("id from: " + value.transferFrom);
    console.log("id to: " + value.transferTo);
    console.log("amount : " + value.amount);
    

    if(value.transferTo==""||value.amount==""||value.amount==null||value.amount<=0){
      this.erorrmessag="select a customer to transfer money to and the amount of money should be greater than 0"
    }else{
      value.transferDate=new Date().toISOString().split('T')[0];
    
      console.log(value);
      
      this.transferMonyService.transferMoney(value).subscribe( 
        {
          next: (response:any)=>{
            this.router.navigate(['/customers']);
          console.log(response);
        },
        error: (error: HttpErrorResponse) => {
          alert(error.message);
        }
      } 
      );
    }
   
  }

}
