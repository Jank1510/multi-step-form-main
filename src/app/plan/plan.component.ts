import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  eleccion:string='month'
  displaymont:string='block'
  displayyear:string='none'
  colormonth:string='#062951'
  coloryear:string='hsl(231, 11%, 63%)'
  viewFreeMonth:string='none'
  changeYearToMonth():void{
    if(this.eleccion=='month'){
      this.eleccion='year' 
      this.displayyear='block'
      this.displaymont='none'
      this.colormonth='hsl(231, 11%, 63%)'
      this.coloryear='#062951'
      this.viewFreeMonth='block'
    }else{
      if(this.eleccion=='year'){
        this.eleccion='month'   
        this.displayyear='none'
        this.displaymont='block'
      this.colormonth='#062951'
      this.coloryear='hsl(231, 11%, 63%)'
      this.viewFreeMonth='none'

      }
    }
  }
  next():void{
    this.router.navigate(['add-ons'])

  }
  back():void{
    this.router.navigate(['info'])

  }
}
