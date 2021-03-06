import {inject, TestBed} from '@angular/core/testing';
import {OfferCacheService} from './offer-cache.service';
import {MOCK_OFFERS} from '../../testing/mock-data';
import * as _ from 'lodash';

describe('OfferCacheService', () => {
    let service: OfferCacheService;
    setMockOffersToLocalStorage();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [OfferCacheService],
        });
    });

    //instead of having to inject it into every spec
    beforeEach(inject([OfferCacheService], (_service: OfferCacheService) => {
        service = _service;
        setMockOffersToLocalStorage();
    }));

    it('should ...', inject([OfferCacheService], (service: OfferCacheService) => {
        expect(service).toBeTruthy();
    }));

    it('should let components filter through offers based on search string', () => {
        expect(service.find('Wirsingeintopf').length).toBe(1);
        expect(service.find(' und ').length).toBe(4);
    });

    it('should store more elements in localStorage if they are put into cache', () => {
        //at the beginning there were 5
        let offers = JSON.parse(localStorage.getItem('offers'));
        expect(offers.length).toBe(5);
        let moreOffers = _.cloneDeep(MOCK_OFFERS);

        //but then
        let otherId = 1000;
        moreOffers.forEach((offer) => offer._id = (otherId++).toString());
        service.putMany(moreOffers);
        //and suddenly there were 10
        let them = JSON.parse(localStorage.getItem('offers'));
        expect(them.length).toBe(10);
    });
});

function clearLocalStorage(){
    localStorage.clear();
}

function setMockOffersToLocalStorage(){
    clearLocalStorage();
    localStorage.setItem('offers', JSON.stringify(MOCK_OFFERS));
}