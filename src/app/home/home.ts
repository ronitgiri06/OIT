import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';

interface Comment {
  comment: string;
  brief: string;
}

interface Course {
  type: string;
  name: string;
  description: string;
}

interface Review {
  review: string;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Flag to track if background image loaded
  isHeroVisible = true;

  readonly comments: Comment[] = [
    {
      comment: "Highly qualified faculty",
      brief: "Mentors with years of classroom and industry experience across computer science subjects.",
    },
    {
      comment: "Doubts beyond class hours",
      brief: "Students repeatedly mention help that continues after the batch ends for the day.",
    },
    {
      comment: "Clear, structured teaching",
      brief: "Every concept is built up from the basics, on the board first and on the machine after.",
    },
    {
      comment: "Small, focused batches",
      brief: "Enough attention per student that nobody quietly falls behind mid-semester.",
    },
    {
      comment: "Exam & viva preparation",
      brief: "Unit tests, previous-year papers and project guidance before each university exam.",
    },
    {
      comment: "Right in Laxmi Nagar",
      brief: "Minutes from Laxmi Nagar metro, above the market near Domino's and Axis Bank.",
    },
  ];

  readonly courses: Course[] = [
    {
      type: "Semester-wise",
      name: "BCA Semester Coaching",
      description: "Complete syllabus coverage for IP University and other Delhi BCA programmes, with unit tests before every exam.",
    },
    {
      type: "Subject-wise",
      name: "MCA & B.Tech Subjects",
      description: "Focused subject batches for computer science students who need depth in theory plus written-exam practice.",
    },
    {
      type: "Beginner",
      name: "Programming Foundations",
      description: "Start from zero and finish writing real programs. Every concept explained on the board, then typed on the machine.",
    },
  ];

  readonly reviews: Review[] = [
    {
      review: "I had an amazing experience at this institute! The teaching quality is excellent — the mentors here don't just teach, they make you understand every concept deeply.",
      name: "Hatake Karan",
    },
    {
      review: "I had a great experience studying at Om Institute of Technology, Laxmi Nagar. It's truly one of the best coaching centers for BCA.",
      name: "Anmol Gupta",
    },
    {
      review: "I had a wonderful learning experience with Alok Sir. He is not only highly knowledgeable, but also extremely polite and professional.",
      name: "Ritik Prapann",
    },
  ];
}