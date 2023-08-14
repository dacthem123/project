import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('ok');
    
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }
  login() {
    // gia su login success
    this.router.navigate(['signup']);

    this.http.get<any>('http://localhost:3000/signupUsers').subscribe((res) => {
      const user = res.find((a: any) => {
        return (
          a.email === this.loginForm.value.email &&
          a.password === this.loginForm.value.password
        );
      });
      if (user) {
        alert('Login Success');
        this.loginForm.reset();
        this.router.navigate(['dashboard']);
      } else {
        alert('user not found');
      }
      (err: any) => {
        alert('some thing went wrong!!');
      };
    });
  }
}
