import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User/user.model';
import { TicketService } from 'src/app/Service/ticket.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  userInfos: any;
  user: User = {};
  constructor(public ticketService: TicketService, private router: Router) {}

  ngOnInit() {
    this.userInfos = this.ticketService.user;
  }
  handleDoubleClick() {
    console.log('Complete button clicked');
  }
  complete() {
    console.log('Complete button clicked');
    console.log(this.isFormValid());

    this.user.firstName = this.userInfos.personalInformation.firstName || '';
    this.user.lastName = this.userInfos.personalInformation.lastName || '';
    this.user.email = this.userInfos.personalInformation.email || '';
    this.user.phone = this.userInfos.personalInformation.phone || '';
    this.user.address = this.userInfos.addressInformation.address || '';
    this.user.city = this.userInfos.addressInformation.city || '';
    this.user.state = this.userInfos.addressInformation.state || '';
    this.user.password = this.userInfos.accountInformation.pswd || '';
    this.user.role = this.userInfos.accountInformation.role || 'client';
    this.ticketService.complete(this.user);
  }

  prevPage() {
    this.router.navigate(['steps/payment']);
  }
  isFormValid() {
    return (
      this.userInfos.personalInformation.firstName &&
      this.userInfos.personalInformation.lastName &&
      this.userInfos.personalInformation.email &&
      this.userInfos.personalInformation.phone &&
      this.userInfos.addressInformation.address &&
      this.userInfos.addressInformation.city &&
      this.userInfos.addressInformation.state &&
      this.userInfos.accountInformation.pswd &&
      this.userInfos.accountInformation.role
    );
  }
}
