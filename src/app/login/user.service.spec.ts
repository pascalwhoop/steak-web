import {inject, TestBed} from "@angular/core/testing";
import {Http} from "@angular/http";
import {UserService} from "./user.service";


describe('UserService', () => {
  beforeEach(() => {
    let http = jasmine.createSpyObj('http', ['get', 'post', 'put', 'delete']);

    TestBed.configureTestingModule({
      providers: [UserService,
        {provide: Http, use: http}]
    });
  });

  it('should ...', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
