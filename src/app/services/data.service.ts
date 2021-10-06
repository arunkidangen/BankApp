import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
const options={
  withCredential:true,
  headers : new HttpHeaders
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
 

  activeUser = '';
  activeAccountNumber = '';
  user: any = {
    1000: { uname: "abhijith", acno: 1000, password: "userone", balance: 5000, tranasction: [] },
    1001: { uname: "akhil", acno: 1001, password: "usertwo", balance: 5000, tranasction: [] },
    1002: { uname: "nikhil", acno: 1002, password: "userthree", balance: 5000, tranasction: [] }
  }

  constructor(private http: HttpClient) {
  }

 

  register(uname: any, acno: any, password: any, blnc: any) {
    const data = {
      uname,
      acno,
      password,
      blnc
    }
    return this.http.post(environment.apiURL+"/register", data);
  }

  login(acno: any, password: any) {
    const data = {
      acno, password
    }
    return this.http.post(environment.apiURL+"/login", data,options);
  }

getOptions(){
  const token =localStorage.getItem("token")
  let headers = new HttpHeaders;
  if(token){
    headers= headers.append("access-token",token)
    options.headers=headers
  }
  return options;
}

  deposit(acno: any, password: any, amount: any) {
    const data = {
      acno, password, amount
    }
    return this.http.post(environment.apiURL+"/deposit", data,this.getOptions())
  }



  withdraw(acno: any, password: any, amount: any) {
    const data = {
    acno, password, amount
  }
  return this.http.post(environment.apiURL+"/withdraw", data,this.getOptions())
  } 


  getTransactionsUsingAccountNumber(acno: any) {
    const data={
      acno
    }
    return this.http.post(environment.apiURL+"/transactionHistory",data,this.getOptions())
  }

  deleteAcc(acno: any) {
    return this.http.delete(environment.apiURL+"/deleteAcc/"+acno,this.getOptions())
  }


}
