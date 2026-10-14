import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Courses],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
