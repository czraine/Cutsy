import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/Service/ticket.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent implements OnInit {
  personalInformation: any = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  submitted: boolean = false;

  constructor(public ticketService: TicketService, private router: Router) {}

  ngOnInit() {
    this.personalInformation =
      this.ticketService.getTicketInformation().personalInformation;
  }

  nextPage() {
    this.submitted = true;

    // Ensure all required fields are filled
    if (
      this.personalInformation.firstname &&
      this.personalInformation.lastname &&
      this.personalInformation.email &&
      this.personalInformation.phone
    ) {
      this.ticketService.user.personalInformation = this.personalInformation;
      this.router.navigate(['registration/address']);
    }
  }

  isFormValid() {
    return (
      this.personalInformation.firstname &&
      this.personalInformation.lastname &&
      this.personalInformation.email &&
      this.personalInformation.phone &&
      isValidString(this.personalInformation.phone) &&
      isValidEmail(this.personalInformation.email)
    );
  }
}
function isValidString(str: string): boolean {
  const pattern = /^\d{8}$/;
  return pattern.test(str);
}
function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
