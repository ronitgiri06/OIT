import { Component } from '@angular/core';
// import { Contacts } from '../contacts/contacts';

interface course {
  type: string;
  name: string;
  summary: string;
  skills: string[];
}

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  readonly courses: course [] = [
    {
      type: "Semester-wise",
      name: "BCA Semester Coaching",
      summary: "Complete syllabus coverage for IP University and other Delhi BCA programmes, with unit tests before every exam.",
      skills: [
        "Programming in C",
        "Data Structures",
        "DBMS",
        "Operating System",
      ]
    },
    {
      type: "Career track",
      name: "Python & Data Handling",
      summary: "Python for automation and data work, taught with datasets and assignments instead of slides.",
      skills: [
        "Core Python",
        "Pandas",
        "SQL queries",
        "Mini projects",
      ]
    },
    {
      type: "Final year",
      name: "Project & Viva Support",
      summary: "Guidance on final-year projects, documentation and viva preparation from mentors who have reviewed hundreds of them.",
      skills: [
        "Project idea",
        "Code review",
        "Report writing",
        "Viva practice",
      ]
    },
    {
      type: "Subject-wise",
      name: "MCA & B.Tech Subjects",
      summary: "Focused subject batches for computer science students who need depth in theory plus written-exam practice.",
      skills: [
        "Java",
        "Computer Networks",
        "Software Engineering",
        "Discrete Maths",
      ]
    },
    {
      type: "Beginner",
      name: "Programming Foundations",
      summary: "Start from zero and finish writing real programs. Every concept explained on the board, then typed on the machine.",
      skills: [
        "C / C++",
        "Python",
        "Problem solving",
        "Logic building",
      ]
    },
    {
      type: "Practical",
      name: "Full-Stack Web Development",
      summary: "Build and deploy working websites — front-end fundamentals through backend APIs and databases.",
      skills: [
        "HTML, CSS, JS",
        "React",
        "Node.js",
        "MySQL",
      ]
    },
  ]
}
