import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'Home', component: Home},
    {path: 'courses', component: Courses},
    {path: 'about', component: About},
    {path: 'contacts', component: Contacts},
];