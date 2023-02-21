import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  name: string = ''
  email: string = ''
  number: string = ''
  nameclass: string = ''
  emailclass: string = ''
  numberclass: string = ''
  labelnameclass: string = ''
  labelemailclass: string = ''
  labelnumberclass: string = ''

  validateForm(): void {
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (this.name == '') {
      let inputname = document.getElementById('name')
      inputname?.focus()
      this.nameclass = 'inputFocusError'
      this.numberclass = ''
      this.emailclass = ''
      this.labelnameclass = 'labelError'
      this.labelemailclass = ''
      this.labelnumberclass = ''
    } else {
      if (this.email == '' || emailPattern.test(this.email) == false) {
        document.getElementById('email')?.focus()
        this.nameclass = ''
        this.numberclass = ''
        this.emailclass = 'inputFocusError'
        this.labelnameclass = ''
        this.labelemailclass = 'labelError'
        this.labelnumberclass = ''
      } else {
        if (this.number == '') {
          document.getElementById('number')?.focus()
          this.numberclass = 'inputFocusError'
          this.emailclass = ''
          this.nameclass = ''
          this.labelnameclass = ''
          this.labelemailclass = ''
          this.labelnumberclass = 'labelError'
        } else {
          this.numberclass = ''
          this.emailclass = ''
          this.nameclass = ''
          this.labelnameclass = ''
          this.labelemailclass = ''
          this.labelnumberclass = ''
          this.router.navigate(['plan'])

        }
      }
    }
  }
}
