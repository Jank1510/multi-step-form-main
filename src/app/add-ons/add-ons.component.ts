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
        this.customizableperfilTXT = '$2/mo'
        break;
    }

  }
  ngOnInit(): void {
  }
  checkOnlineService(): void {
    if (this.checkeado1 == false) {
      this.check1 = '#4943fe'
      this.checkeado1 = true
      this.border1 = '0.1vw solid #062951'
      this.data.setTipoAddons({
        name: 'Online Service',
        valor: this.onlineserviceTXT
      })
    } else {
      if (this.checkeado1 == true) {
        this.check1 = '#ffffff'
        this.checkeado1 = false
        this.border1 = '0.1vw solid hsl(229, 24%, 87%)'
        this.data.deleteAddons('Online Service')
      }
    }
  }
  checkLargeStorage(): void {
    if (this.checkeado2 == false) {
      this.check2 = '#4943fe'
      this.checkeado2 = true
      this.border2 = '0.1vw solid #062951'
      this.data.setTipoAddons({
        name: 'Larger Storage',
        valor: this.largestorageTXT
      })
    } else {
      if (this.checkeado2 == true) {
        this.check2 = '#ffffff'
        this.checkeado2 = false
        this.border2 = '0.1vw solid hsl(229, 24%, 87%)'
        this.data.deleteAddons('Larger Storage')
      }
    }
  }
  checkCustomizableProfile(): void {
    if (this.checkeado3 == false) {
      this.check3 = '#4943fe'
      this.checkeado3 = true
      this.border3 = '0.1vw solid #062951'
      this.data.setTipoAddons({
        name: 'Customizable Profile',
        valor: this.customizableperfilTXT
      })
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
