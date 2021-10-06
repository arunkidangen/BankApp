import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions:any;
  activeAcno:any;
  constructor(private dataServices: DataService) { 

    this.activeAcno=JSON.parse(localStorage.getItem('activeAccountNumber') || "");
    this.dataServices.getTransactionsUsingAccountNumber(this.activeAcno).subscribe((result:any) =>{
      if(result){
        this.transactions=result.transaction
      }
    },(result:any) =>{
      this.transactions=result.error.transaction;
    })
   console.log(this.transactions);
   
  }

  ngOnInit(): void {
  }

}
