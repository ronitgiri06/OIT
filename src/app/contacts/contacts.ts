import { Component } from '@angular/core';
import { Courses } from '../courses/courses';
import { About } from '../about/about';
import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-contacts',
  imports: [Courses, About, Contacts, RouterLink, RouterOutlet],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {

}
