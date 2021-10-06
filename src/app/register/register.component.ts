import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userName = "";
  accountNumber = "";
  password = "";
  balance = "";

  registerForm = this.formBuilder.group({
    uName: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    blnc: ['']
  });

  constructor(private dataServices: DataService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }





  register() {
    if (this.dataServices.register(this.userName, this.accountNumber, this.password, this.balance)) {
      alert("user added successfully..!!")
      this.router.navigateByUrl("");
    } else {
      alert("user already exists..!!")
    }


  }


  registerUsingReactiveForms() {
    // console.log(this.registerForm);
    var uname = this.registerForm.value.uName;
    var acno = this.registerForm.value.acno;
    var password = this.registerForm.value.pswd;
    var blnc = this.registerForm.value.blnc;
    if (this.registerForm.valid) {
      this.dataServices.register(uname, acno, password, blnc)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message)
          this.router.navigateByUrl('');
        }
      },(result:any) =>{
        alert(result.error.message)
      })
    }
    else {
      alert("invalid form");
    }
  }
}
