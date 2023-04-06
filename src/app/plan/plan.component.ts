import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(private router: Router, private data: DataService) {
    switch (data.getPlanSelected()) {
      case 'arcade':
        this.arcade()
        break;
      case 'advanced':
        this.advanced()
        break;
      case 'pro':
        this.pro()
        break;
    }
    this.yearMonth = data.getyearOrmonth()
    switch (this.yearMonth) {
      case 'Month':
        this.displayyear = 'none'
        this.displaymont = 'block'
        this.colormonth = '#062951'
        this.coloryear = 'hsl(231, 11%, 63%)'
        this.viewFreeMonth = 'none'
        this.txtarcade = '$9/mo'
        this.txtadvanced = '$12/mo'
        this.txtpro = '$15/mo'
        break;
      case 'Year':
        this.displayyear = 'block'
        this.displaymont = 'none'
        this.colormonth = 'hsl(231, 11%, 63%)'
        this.coloryear = '#062951'
        this.viewFreeMonth = 'block'
        this.txtarcade = '$90/yr'
        this.txtadvanced = '$120/yr'
        this.txtpro = '$150/yr'
        break;
    }
  }

  ngOnInit(): void {
  }
  yearMonth: string
  displaymont: string = 'block'
  displayyear: string = 'none'
  colormonth: string = '#062951'
  coloryear: string = 'hsl(231, 11%, 63%)'
  viewFreeMonth: string = 'none'

  txtarcade: string = '$9/mo'
  txtadvanced: string = '$12/mo'
  txtpro: string = '$15/mo'

  borderArcade: string = ''
  arcadeSelected: boolean = false
  borderAdvanced: string = ''
  arcadeAdvanced: boolean = false
  borderPro: string = ''
  arcadePro: boolean = false



  changeYearToMonth(): void {    
    if (this.yearMonth == 'Month') {
      this.yearMonth = 'Year'
      this.displayyear = 'block'
      this.displaymont = 'none'
      this.colormonth = 'hsl(231, 11%, 63%)'
      this.coloryear = '#062951'
      this.viewFreeMonth = 'block'
      this.txtarcade = '$90/yr'
      this.txtadvanced = '$120/yr'
      this.txtpro = '$150/yr'
      this.data.setyearOrmonth('Year') 
    } else {
      if (this.yearMonth == 'Year') {
        this.yearMonth = 'Month'
        this.displayyear = 'none'
        this.displaymont = 'block'
        this.colormonth = '#062951'
        this.coloryear = 'hsl(231, 11%, 63%)'
        this.viewFreeMonth = 'none'
        this.txtarcade = '$9/mo'
        this.txtadvanced = '$12/mo'
        this.txtpro = '$15/mo'
        this.data.setyearOrmonth('Month')
      }
    }
    this.arcadePro = true
    this.arcadeAdvanced = true
    this.arcadeSelected = true
    this.arcade()
    this.pro()
    this.advanced()
  }
  next(): void {
    if (this.arcadePro == false && this.arcadeAdvanced == false && this.arcadeSelected == false) {
      let elementos: NodeListOf<HTMLElement> = document.querySelectorAll('.cards');
      setTimeout(() => {
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].style.animationName = 'none';
        }
      }, 1000);
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.animationName = 'animationNoselected';
      }
    } else {
      this.router.navigate(['add-ons'])
    }
  }
  back(): void {
    this.router.navigate(['info'])

  }
  arcade() {
    if (this.arcadeSelected == false) {
      this.borderArcade = '0.1vw solid hsl(213, 96%, 18%)'
      this.borderAdvanced = '0.1vw solid hsl(229, 24%, 87%)'
      this.borderPro = '0.1vw solid hsl(229, 24%, 87%)'
      this.arcadePro = false
      this.arcadeAdvanced = false
      this.arcadeSelected = true
      this.data.setPlanSelected('Arcade')
      this.data.setTipoPlan(this.txtarcade)
    } else {
      if (this.arcadeSelected == true) {
        this.borderArcade = '0.1vw solid hsl(229, 24%, 87%)'
        this.arcadeSelected = false
        this.data.setPlanSelected('')
      }
    }
  }
  advanced() {
    if (this.arcadeAdvanced == false) {
      this.borderAdvanced = '0.1vw solid hsl(213, 96%, 18%)'
      this.borderPro = '0.1vw solid hsl(229, 24%, 87%)'
      this.borderArcade = '0.1vw solid hsl(229, 24%, 87%)'
      this.arcadePro = false
      this.arcadeAdvanced = false
      this.arcadeAdvanced = true
      this.data.setPlanSelected('Advanced')
      this.data.setTipoPlan(this.txtadvanced)
    } else {
      if (this.arcadeAdvanced == true) {
        this.borderAdvanced = '0.1vw solid hsl(229, 24%, 87%)'
        this.arcadeAdvanced = false
        this.data.setPlanSelected('')
      }
    }
  }
  pro() {
    if (this.arcadePro == false) {
      this.borderPro = '0.1vw solid hsl(213, 96%, 18%)'
      this.borderAdvanced = '0.1vw solid hsl(229, 24%, 87%)'
      this.borderArcade = '0.1vw solid hsl(229, 24%, 87%)'
      this.arcadeSelected = false
      this.arcadeAdvanced = false
      this.arcadePro = true
      this.data.setPlanSelected('Pro')
      this.data.setTipoPlan(this.txtpro)
    } else {
      if (this.arcadePro == true) {
        this.borderPro = '0.1vw solid hsl(229, 24%, 87%)'
        this.arcadePro = false
        this.data.setPlanSelected('')

      }
    }
  }

}
