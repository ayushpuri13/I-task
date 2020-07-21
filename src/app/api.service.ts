import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	token:string=null;
	userlist:any=[]

  constructor(private httpClient:HttpClient,
              private router :Router,
              private toastr : ToastrService
              ) { }

login(email:string,password:string){
    console.log( '/api/v1/auth/login', {email, password});
 return this.httpClient.post<any>( "http://13.233.27.106:8081/api/user/login", {email, password}).subscribe(res => {
   if(res){
     console.log(res);
  this.token=res.token;
  console.log(res.token);
 
  this.httpClient.post<any>("http://13.233.27.106:8081/api/user/list?page=1",{filters:{},sort:{}}).subscribe(res=>{
  	if(res){
  		console.log(res);
  		this.userlist=res.result;
  		this.toastr.success('','Login Successfull');
  		this.router.navigate(['userlist'])
}},
err=>{
	console.log(err)

})
  }},
 error=>{
if(error){
  console.log(error);
  this.toastr.error(" ","Login Failed");

  }}
  )
  }
}

 // http://13.233.27.106:8081/api/user/list?page=1 -->

