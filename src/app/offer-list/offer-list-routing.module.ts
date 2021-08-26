import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferListPage } from './offer-list.page';

const routes: Routes = [
  {
    path: '',
    component: OfferListPage
  },
  {
    path: 'offer-details',
    loadChildren: () => import('./offer-details/offer-details.module').then( m => m.OfferDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferListPageRoutingModule {}
