import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User/user.model';

@Injectable()
export class TicketService {
  user: any = {
    personalInformation: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    addressInformation: {
      address: '',
      city: '',
      state: '',
    },
    accountInformation: {
      pswd: '',
      role: 'client',
    },
    confirmPassword: '',
  };

  private registrationComplete = new Subject<any>();

  regComplete$ = this.registrationComplete.asObservable();

  getTicketInformation() {
    return this.user;
  }

  setTicketInformation(ticketInformation: any) {
    this.user = ticketInformation;
  }

  complete(user: User) {
    this.registrationComplete.next(user);
  }
}
