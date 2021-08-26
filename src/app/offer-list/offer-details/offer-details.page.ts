import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfferList } from '../offer-list.modal';
import { OfferListService } from '../offer-list.service';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.page.html',
  styleUrls: ['./offer-details.page.scss'],
})
export class OfferDetailsPage implements OnInit {

  public offer: OfferList;
  private allOffers: OfferList[];

  constructor(
    private route: ActivatedRoute,
    private offerListService: OfferListService
  ) { }

  ngOnInit() {
    let id;
    // eslint-disable-next-line no-underscore-dangle
    this.allOffers = this.offerListService._offerList;

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('offerId')){
        return;
      }
      id = paramMap.get('offerId');
    });

    // console.log(id);
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for(let i = 0; i < this.allOffers.length; i++){
      // eslint-disable-next-line eqeqeq
      if(this.allOffers[i].id == id){
        this.offer = this.allOffers[i];
        i = this.allOffers.length;
      }
    }
    // console.log(this.offer);
  }

}
