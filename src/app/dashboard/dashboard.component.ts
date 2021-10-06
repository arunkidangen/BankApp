import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  accno="";
  password="";
  amount="";

  waccno="";
  wpassword="";
  wamount="";

  activeUser:any;
  deleteAcno:any;

  loggedInDate = new Date();
  constructor(private dataService : DataService , private formBuilder : FormBuilder, private router :Router) { 
    this.activeUser=localStorage.getItem("activeUser");
  }

  depositForm=this.formBuilder.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amount : ['',[Validators.required,Validators.pattern('[0-9]*')]]
  })
withdrawalForm = this.formBuilder.group({
  waccno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  wpassword:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  wamount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

  ngOnInit(): void {

    if(!localStorage.getItem("token")){
      alert("Please Log in ..")
      this.router.navigateByUrl("");
    }
  }
  
  deposit(){





    var acno = this.depositForm.value.accno;
    var password=this.depositForm.value.password;
    var amount = this.depositForm.value.amount;
    console.log(acno,password,amount);



    
    if(this.depositForm.valid){
      this.dataService.deposit(acno,password,amount).subscribe((result:any) => {
        if (result){
          alert(result.message)
        }
      },(result:any)=>{
        alert(result.error.message)
        
      })
    }else{
      alert ("invalid form");
    }
   
  }
  withdraw(){
  var acno = this.withdrawalForm.value.waccno;
  var password=this.withdrawalForm.value.wpassword;
  var amount = this.withdrawalForm.value.wamount;
  console.log(acno,password,amount);
  if(this.withdrawalForm.valid){
    this.dataService.withdraw(acno,password,amount).subscribe((result:any) => {
      if (result){
        alert(result.message)
      }
    },(result:any)=>{
      alert(result.error.message)
      
    })
  }else{
    alert("invalid Form inputs")
  }
}

deleteCallFromParent (){
  this.deleteAcno = JSON.parse(localStorage.getItem("activeAccountNumber") || "")
}

onDelete(event:any){
  alert("from parent "+ event);

  this.dataService.deleteAcc(event).subscribe((result:any)=>{
    if(result){
      alert(result.message);
      localStorage.removeItem("token");
      localStorage.removeItem("activeAccountNumber");
      localStorage.removeItem("activeUser");
      this.router.navigateByUrl("");
    }
  },(result:any)=>{
    alert(result.error.message)
  })
}


onCancel(){
  this.deleteAcno =""
}

logOut(){
  localStorage.removeItem('token');
  this.router.navigateByUrl("");
}
}
