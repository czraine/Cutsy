import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/Service/ticket.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoComponent {
  constructor(public ticketService: TicketService, private router: Router) {}
  contactinfos: any;

  submitted: boolean = false;

  ngOnInit() {
    this.contactinfos = this.ticketService.user.addressInformation;
  }

  nextPage() {
    this.ticketService.user.addressInformation = this.contactinfos;
    this.router.navigate(['registration/account']);
  }

  prevPage() {
    this.router.navigate(['registration/personal']);
  }
  isFormValid() {
    return (
      this.contactinfos.address &&
      this.contactinfos.city &&
      this.contactinfos.state
    );
  }
}
