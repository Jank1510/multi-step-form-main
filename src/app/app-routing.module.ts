import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { InfoComponent } from './info/info.component';
import { PlanComponent } from './plan/plan.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: 'add-ons',component:AddOnsComponent},
  {path: 'plan',component:PlanComponent},
  {path: 'info',component:InfoComponent},
  {path: 'summary',component:SummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
