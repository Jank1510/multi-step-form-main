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
  router_: any
  valorTotal:number=0
  constructor(private data: DataService, private router: Router) {
    this.dataAll = data
    this.router_ = router 
    this.valorTotal=parseInt(this.dataAll.getTipoPlan().match(/\d+/g).toString())+this.valorTotal
    for (let index = 0; index < this.dataAll.getTipoAddons().length; index++) {
      const element = this.dataAll.getTipoAddons()[index];
      this.valorTotal=parseInt(element.valor.match(/\d+/g).toString())+this.valorTotal      
    }
    console.log(this.valorTotal)
    console.log(this.dataAll.getyearOrmonth())
  }

  ngOnInit(): void {
  }
  back(): void {
    this.router.navigate(['add-ons'])
  }
  confirm(): void {

  }
}
