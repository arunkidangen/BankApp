import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  loginAccount = "";
  loginPassword = "";

  loginForm = this.formBuilder.group({
    loginAccount: ['',[Validators.required, Validators.pattern('[0-9]*')]],
    loginPassword: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  // register(){
  //   this.router.navigateByUrl("register");
  // }

  createAccountusingngModal() {
    var loginAccountNo = this.loginForm.value.loginAccount;
    var loginPswd = this.loginForm.value.loginPassword;
    console.log(this.loginForm.valid);

    if (this.loginForm.valid) {

      this.dataService.login(loginAccountNo, loginPswd).subscribe((result:any) =>{
        if(result){
          localStorage.setItem("token",result.token)
          localStorage.setItem("activeUser",result.currentUser)
          localStorage.setItem("activeAccountNumber",loginAccountNo)
          alert (result.message);
          this.router.navigateByUrl("dashboard")
        }
      },
      (result:any)=>{
        alert(result.error.message)
      })
    }else{
      alert("invalid form")
    }
  }
}
