import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  dataAll: any
  constructor(private data: DataService, private router: Router) {
    this.dataAll = data
    console.log(this.dataAll.getPlanSelected() + ' ' + this.dataAll.getTipoPlan())
    console.log(this.dataAll.getTipoAddons().length) 
  }

  ngOnInit(): void {
  }
  back(): void {
    this.router.navigate(['add-ons'])
  }
  confirm(): void {

  }
  change():void{

  }
}
