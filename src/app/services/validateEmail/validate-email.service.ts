import { HttpClient } from '@angular/common/http';
import { DataService } from './../data/data.service';
import { Injectable } from '@angular/core';
import { Constants } from '../constant';

@Injectable({
  providedIn: 'root',
})
export class ValidateEmailService extends DataService {
  httpService: HttpClient;

  constructor(http: HttpClient) {
    super(Constants.url + '/email/', http);
    this.httpService = http;
  }

  sendValidatedUserEmail(email: any, code: any) {
    return this.httpService.get(
      Constants.url + '/email/verify-email/' + email + '/' + code
    );
  }

  isEmailValid(url: string) {
    return this.httpService.get(url);
  }
}
