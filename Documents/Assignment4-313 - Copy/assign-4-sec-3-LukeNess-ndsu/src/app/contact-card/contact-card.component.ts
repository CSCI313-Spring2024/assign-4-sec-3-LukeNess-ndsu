import { Component, Input } from '@angular/core';
import { Contact } from '../contact.service';
import { RouterLink } from '@angular/router';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-card',
  imports: [RouterLink, CommonModule],
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  contacts: Contact[] = [];

  constructor(private contactsService: ContactService){
    this.loadContacts()
  }
  loadContacts(){
    this.contactsService.getContacts().subscribe(data => this.contacts = data)
  }
  deleteContact(id: number){
    this.contactsService.deleteContact(id).subscribe(() => this.loadContacts())
  }
}
