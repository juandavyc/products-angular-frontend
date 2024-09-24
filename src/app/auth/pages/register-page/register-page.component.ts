import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private validatorsService:ValidatorsService = inject(ValidatorsService);

  public myForm: FormGroup = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: this.validatorsService.isFieldOneEqualToFieldTwo('password','password2')
    }
  );

  constructor() { }

  register() {
    console.log(this.myForm.value);
  }
}
