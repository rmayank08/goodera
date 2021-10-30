import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  logInUser() {
    this.authService.loginUser(this.username, this.password).subscribe(
      res => {
        console.log(res)
        if (res) {
          this.router.navigate(['/jobs-list']);
        }
      }
    );
  }

  ngOnInit(): void {
  }
}
