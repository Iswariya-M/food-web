import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  signUp(): void {
    
    if (!/^[a-zA-Z]+$/.test(this.name)) {
      this.errorMessage = 'Only letters are allowed in the name field.';
      return;
    }

    
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Invalid email format.';
      return;
    }

    
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    
    this.name = '';
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }

  private isValidEmail(email: string): boolean {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}