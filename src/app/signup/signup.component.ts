import { Router, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators} from "@angular/forms"
 import { FormControl } from '@angular/forms';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   public SignupForm !: FormGroup 
  constructor(public formBuilder : FormBuilder,  public http : HttpClient,public router:Router) {}

    ngOnInit(): void {
       this.SignupForm = this.formBuilder.group({
        fullname:['',Validators.required],
        email:[''],
        password:['',Validators.required],
        mobile:[''],
      })

    }
    signUp(){
      this.router.navigate(['dashboard'])
      this.http.post<any>("http://localhost:3000/signupUsers",this.SignupForm.valid)
      .subscribe(res=>{
       alert("Signup Successfull");
        this.SignupForm.reset();
        this.router.navigate(['login'])
      },err=>{
        alert('Something went wrong')
      })
    
    }

}
