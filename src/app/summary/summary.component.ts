import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private data: DataService) {
    console.log(data.getPlanSelected()+' '+data.getTipoPlan())
    console.log(data.getTipoAddons())
   }

  ngOnInit(): void {
  }

}
