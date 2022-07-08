import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-ai-contact',
  templateUrl: './ai-contact.component.html',
  styleUrls: ['./ai-contact.component.scss']
})
export class AiContactComponent implements OnInit {
  constructor(private fb: FormBuilder, private contact: ContactService) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''],
      subject: [''],
      message: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.contact.sendMessage(this.form.value).subscribe((response) => {
      this.form.reset();
      this.submitted = true;
    });
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
