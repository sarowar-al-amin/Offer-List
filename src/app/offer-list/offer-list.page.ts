import { Component, OnInit } from '@angular/core';
import { OfferList } from './offer-list.modal';
import { OfferListService } from './offer-list.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.page.html',
  styleUrls: ['./offer-list.page.scss'],
})
export class OfferListPage implements OnInit {
  offerList: OfferList[];

  constructor(
    private offerListService: OfferListService
  ) { }

  ngOnInit() {
    // eslint-disable-next-line no-underscore-dangle
    this.offerList = this.offerListService._offerList;
  }

}
