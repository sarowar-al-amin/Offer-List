import { Injectable} from '@angular/core';
import { OfferList } from './offer-list.modal';

@Injectable({
  providedIn: 'root'
})

export class OfferListService{
  public _offerList: OfferList[] = [
    new OfferList(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City.',
      'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200',
      '25 August, 2021',
      // eslint-disable-next-line max-len
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur recusandae rem accusantium laborum soluta esse atque natus a explicabo autem cum, molestias perspiciatis dignissimos. Autem blanditiis reprehenderit non officia.'
    ),
    new OfferList(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg',
      '25 August, 2021',
      // eslint-disable-next-line max-len
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur recusandae rem accusantium laborum soluta esse atque natus a explicabo autem cum, molestias perspiciatis dignissimos. Autem blanditiis reprehenderit non officia.'
    ),
    new OfferList(
      'p3',
      'The Foggy Palace',
      'Not your average city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg',
      '25 August, 2021',
      // eslint-disable-next-line max-len
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate consectetur recusandae rem accusantium laborum soluta esse atque natus a explicabo autem cum, molestias perspiciatis dignissimos. Autem blanditiis reprehenderit non officia.'
    )
  ];
}
