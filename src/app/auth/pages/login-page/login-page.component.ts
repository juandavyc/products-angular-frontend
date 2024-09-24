import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);


  public myForm: FormGroup = this.formBuilder.group({
    email: ['david@gmail.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]]
  })

  login(): void {

    if (this.myForm.invalid) return;
    const { email, password } = this.myForm.value;
    this.authService.login(email, password)
      .subscribe(
        {
          next: () => this.router.navigateByUrl('/dashboard'),
          error: (error) => {
            Swal.fire({
              title: 'Error',
              text: error,
              icon: 'error'
            })
          }
        }
      )
  }
}
