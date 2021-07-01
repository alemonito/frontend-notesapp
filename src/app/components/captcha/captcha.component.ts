import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators,} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {

   aFormGroup!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });

  }

  siteKey:string = "6LfqxmIbAAAAAJ7UUZFCJiVO7SK81ksKhmi0WOns";

}
