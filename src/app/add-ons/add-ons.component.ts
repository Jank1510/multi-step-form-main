import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent implements OnInit {
  check1: string = '#ffffff'
  border1: string = '0.1vw solid hsl(229, 24%, 87%)'
  checkeado1: boolean = false
  check2: string = '#ffffff'
  border2: string = '0.1vw solid hsl(229, 24%, 87%)'
  checkeado2: boolean = false
  check3: string = '#ffffff'
  border3: string = '0.1vw solid hsl(229, 24%, 87%)'
  checkeado3: boolean = false
  onlineserviceTXT: string = ''
  largestorageTXT: string = ''
  customizableperfilTXT: string = ''
  constructor(private router: Router, private data: DataService) {
    switch (data.getyearOrmonth()) {
      case 'Year':
        this.onlineserviceTXT = '+$10/yr'
        this.largestorageTXT = '+$20/yr'
        this.customizableperfilTXT = '+$20/yr'
        break;
      case 'Month':
        this.onlineserviceTXT = '+$1/mo'
        this.largestorageTXT = '+$2/mo'
        this.customizableperfilTXT = '+$2/mo'
        break;
    } 
    console.log(this.data.getchangeyearmonth())
    if(this.data.getchangeyearmonth()==true){
      this.checkeado1=true
      this.checkeado2=true
      this.checkeado3=true
      this.checkCustomizableProfile(true)
      this.checkLargeStorage(true)
      this.checkOnlineService(true)
      console.log('entro a la condicion')
    }
    for (let index = 0; index < this.data.getTipoAddons().length; index++) {
      const element = this.data.getTipoAddons()[index];
      if (element.name == 'Online Service') {
        this.checkOnlineService(true)
      } else {
        if (element.name == 'Larger Storage') { 
          this.checkLargeStorage(true)
        } else {
          if (element.name == 'Customizable Profile') {
            this.checkCustomizableProfile(true)
          }
        }
      }
    }
   
  }
  ngOnInit(): void {
  }
  checkOnlineService(callConstructor: boolean): void {
    if (this.checkeado1 == false) {
      this.check1 = '#4943fe'
      this.checkeado1 = true
      this.border1 = '0.1vw solid #062951'
      if (callConstructor == false) {
        this.data.setTipoAddons({
          name: 'Online Service',
          valor: this.onlineserviceTXT
        })
      }
      this.data.setchangeyearmonth(false)
    } else {
      if (this.checkeado1 == true) {
        this.check1 = '#ffffff'
        this.checkeado1 = false
        this.border1 = '0.1vw solid hsl(229, 24%, 87%)'
        this.data.deleteAddons('Online Service')
      }
    }
  }
  checkLargeStorage(callConstructor: boolean): void {
    if (this.checkeado2 == false) {
      this.check2 = '#4943fe'
      this.checkeado2 = true
      this.border2 = '0.1vw solid #062951'
      if (callConstructor == false) {
        this.data.setTipoAddons({
          name: 'Larger Storage',
          valor: this.largestorageTXT
        })
      }
      this.data.setchangeyearmonth(false)
    } else {
      if (this.checkeado2 == true) {
        this.check2 = '#ffffff'
        this.checkeado2 = false
        this.border2 = '0.1vw solid hsl(229, 24%, 87%)'
        this.data.deleteAddons('Larger Storage')
      }
    }
  }
  checkCustomizableProfile(callConstructor: boolean): void {
    if (this.checkeado3 == false) {
      this.check3 = '#4943fe'
      this.checkeado3 = true
      this.border3 = '0.1vw solid #062951'
      if (callConstructor == false) {
        this.data.setTipoAddons({
          name: 'Customizable Profile',
          valor: this.customizableperfilTXT
        })
      }
      this.data.setchangeyearmonth(false)
    } else {
      if (this.checkeado3 == true) {
        this.check3 = '#ffffff'
        this.checkeado3 = false
        this.border3 = '0.1vw solid hsl(229, 24%, 87%)'
        this.data.deleteAddons('Customizable Profile')
      }
    }
  }
  next(): void {
    if (this.data.getTipoAddons().length > 0) {
      this.router.navigate(['summary'])
    } else {
      let elementos: NodeListOf<HTMLElement> = document.querySelectorAll('.eleccion');
      setTimeout(() => {
        for (let i = 0; i < elementos.length; i++) {
          elementos[i].style.animationName = 'none';
        }
      }, 1000);
      for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.animationName = 'animationNoselected';
      }
    }
  }
  back(): void {
    this.router.navigate(['plan'])
  }
}
