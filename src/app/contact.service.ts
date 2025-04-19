import { Injectable } from '@angular/core';
import { of } from 'rxjs';


export interface Contact {
  id: number,
  name: string,
  phoneNumber: string,
  emailAddress: string
}

 @Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private Contacts: Contact[] =[
    {
        id: 9999999,
        name: "Daniel D",
        phoneNumber: "123456879",
        emailAddress: "notsure@notsure.com",
    },
    
    {
        id: 999999,
        name: "Jake L",
        phoneNumber: "987654321",
        emailAddress: "reallynotsure@notsure.com",
    }
    ];
    
    private nextId = this.Contacts.length;

    getContacts(){
      return of([...this.Contacts]);

    }

    getContactById(id: number){
      return of(this.Contacts.find( Contacts => Contacts.id === id)!);

    }
  
    addContact(contact: Omit<Contact, 'id'>){
      const newContact = {...contact, id: this.nextId++};
      this.Contacts.push(newContact);
      return of(newContact)
    }

    updateContact(id: number, updated: Partial<Contact>){
      const index = this.Contacts.findIndex( contacts => contacts.id === id);
      if (index !== -1){
        this.Contacts[index] = {...this.Contacts[index], ...updated};

      }
      return of(this.Contacts[index])
    }

    deleteContact(id: number){
      this.Contacts = this.Contacts.filter(Contacts => Contacts.id !== id);
      return of(true)
    }
}
