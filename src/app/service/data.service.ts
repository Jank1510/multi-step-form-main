import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //user info
  name: string
  email: string
  phone: string
  //plan
  planSelected: string
  tipoPlan: string
  yearOrmonth: string
  changeyearmont:boolean
  //addons
  addons: any = []
  constructor() {
    this.email = ''
    this.name = ''
    this.phone = ''
    this.planSelected = ''
    this.tipoPlan = ''
    this.yearOrmonth = 'Month'
    this.changeyearmont=false
  }
  //info data
  getName(): string {
    return this.name
  }
  setName(name: string): void {
    this.name = name
  }
  getPhone(): string {
    return this.phone
  }
  setPhone(phone: string): void {
    this.phone = phone
  }
  getEmail(): string {
    return this.email
  }
  setEmail(email: string): void {
    this.email = email
  }
  //plan data
  getPlanSelected(): string {
    return this.planSelected
  }
  setPlanSelected(planSelected: string): void {
    this.planSelected = planSelected
  }
  getTipoPlan(): string {
    return this.tipoPlan
  }
  setTipoPlan(tipoPlan: string): void {
    this.tipoPlan = tipoPlan
  }
  setTipoAddons(addons: object): void {
    this.addons.push(addons)
  }
  getTipoAddons(): any {
    return this.addons
  }
  clearAddons(): void {
    this.addons = []
  }
  deleteAddons(addonsDelete: string): void {
    for (let index = 0; index < this.addons.length; index++) {
      if (this.addons[index].name == addonsDelete) {
        this.addons.splice(index, 1)
      }
    }
  }
  setyearOrmonth(yearOrmonth: string): void {
    this.yearOrmonth = yearOrmonth
  }
  getyearOrmonth(): string {
    return this.yearOrmonth
  }
  setchangeyearmonth(changeyearmont:boolean):void{
    this.changeyearmont=changeyearmont
  }
  getchangeyearmonth():boolean{
    return this.changeyearmont
  }
}
