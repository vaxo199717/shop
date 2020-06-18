import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signupuser',
  templateUrl: './signupuser.component.html',
  styleUrls: ['./signupuser.component.scss']
})
export class SignupuserComponent implements OnInit {
  bday: Number[] = [];
  bmonth: string[] = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
  byear: number[] = [];
  forms: FormGroup;

  validatormessage = {
    'firstName': {
      'requaired': 'შეიყვანეთ სახელი!!!',
    },
    'lastName': {
      'requaired': 'შეიყვანეთ გვარი!!!',
    },
    'numOrEmail': {
      'requaired': 'შეიყვანეთ ნომერ ან ელ-ფოსტა!!!',
    },
    'password': {
      'requaired': 'შეიყვანეთ პაროლი!!!',
    }
  }
  constructor(fb: FormBuilder) {
    this.forms = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      numOrEmail: ['', Validators.required],
      password: ['', Validators.required],
      birthday: ['', Validators.required],
      birthmonth: ['', Validators.required],
      birthyear: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    for (let i = 1; i <= 31; i++) {
      this.bday.push(i);
    }
    for (let i = 1920; i <= 2020; i++) {
      this.byear.push(i);
    }

  }
  add(): void {
    console.log(this.forms.value)
  }
}