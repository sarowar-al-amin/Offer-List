import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'offer-list',
    pathMatch: 'full'
  },
  {
    path: 'offer-list',
    children: [
      {
        path: '',
        loadChildren: () => import('./offer-list/offer-list.module').then( m => m.OfferListPageModule)
      },
      {
        path: ':offerId',
        loadChildren: () => import('./offer-list/offer-details/offer-details.module').then( m => m.OfferDetailsPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
