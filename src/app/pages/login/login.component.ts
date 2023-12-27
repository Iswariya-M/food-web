import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router:Router){}

  login(): void {
  
    const storedData = localStorage.getItem('userData');
    if (!storedData) {
      this.errorMessage = 'User not found.';
      return;
    }

    const userData = JSON.parse(storedData);

    if ((this.email === userData.email || this.email === userData.name) && this.password === userData.password) {
      alert('Login success!');
      this.errorMessage = '';
      this.router.navigate(['/blogs']);
    } else {
      this.errorMessage = 'User not found.';
    }
  }
}