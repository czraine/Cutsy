import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/Service/ticket.service';

@Component({
  selector: 'app-password-info',
  templateUrl: './password-info.component.html',
  styleUrls: ['./password-info.component.css'],
})
export class PasswordInfoComponent {
  constructor(public ticketService: TicketService, private router: Router) {}
  accountInfos: any;
  confirmPassword: any;
  submitted: boolean = false;
  pswd: any;
  roles!: any[];
  roleInvalid = false;
  roleTouched = false;
  ngOnInit() {
    this.accountInfos = this.ticketService.user.accountInformation;
    this.confirmPassword = this.ticketService.user.confirmPassword;
    this.roles = [
      { name: 'Client', value: 'hairDresser' },
      { name: 'hairDresser', value: 'Client' },
    ];
  }
  setRole(event: any) {
    this.roleTouched = true;
    this.validateRole();
  }
  validateRole() {
    this.roleInvalid = !this.accountInfos.role;
  }
  nextPage() {
    this.ticketService.user.accountInformation = this.accountInfos;
    this.router.navigate(['registration/confirmation']);
  }

  prevPage() {
    this.router.navigate(['registration/address']);
  }
  isFormValid() {
    return (
      this.accountInfos.pswd &&
      this.confirmPassword &&
      this.accountInfos.pswd == this.confirmPassword &&
      this.roleTouched
    );
  }
}
