import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup;
  typeInput: string = "password";
  password: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  showPassword() {
    if (this.password) {
      this.password = false;
      this.typeInput = "password";
    } else {
      this.password = true;
      this.typeInput = "text";
    }
  }

  async onSubmit() {
    try {
      await this.authService.login(this.formLogin.value);
      await this.router.navigate(['/home']);

    } catch (e) {
      console.log(e);
    }
  }
}
