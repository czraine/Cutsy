import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TicketService } from '../Service/ticket.service';
import { LayoutService } from '../Service/app.layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [MessageService],
})
export class RegistrationComponent implements OnInit {
  items!: MenuItem[];

  subscription!: Subscription;

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    public messageService: MessageService,
    public ticketService: TicketService
  ) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'address',
        routerLink: 'address',
      },
      {
        label: 'account',
        routerLink: 'account',
      },
      {
        label: 'confirmation',
        routerLink: 'confirmation',
      },
    ];

    this.subscription = this.ticketService.regComplete$.subscribe((user) => {
      this.messageService.add({
        severity: 'success',
        summary: 'Order submitted',
        detail:
          'Dear, ' +
          user.firstname +
          ' ' +
          user.lastname +
          ' your account has been created please login.',
      });
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 5000);
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
