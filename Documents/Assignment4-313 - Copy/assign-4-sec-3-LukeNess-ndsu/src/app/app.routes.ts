import { Routes } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { NewContactComponent } from './new-contact/new-contact.component';

export const routes: Routes = [

    {
        path: 'home',
        component: ContactCardComponent,
        title: 'Home'
    },

    {
        path: 'edit/:id',
        component: ContactEditComponent,
        title: 'Edit'
    },
    {
        path: 'add',
        component: NewContactComponent,
        title: 'Add'
    }



];
