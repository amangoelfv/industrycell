import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  aboutUs: string = 'Industry Cell, NIT Kurukshetra (I-Cell) is a non-profit student’s organization dedicated to promoting the spirit of entrepreneurship among college students. The basic aim of Industry Cell, NIT Kurukshetra is to encourage college-level students throughout the nation to start their own enterprise . There is a strong vision and dedication to achieve this aim, which it intends to do by the following initiatives:'
  initiatives = [
    'Organising Workshops and Lectures periodically to create awareness about entrepreneurship.',
    'Functioning as a guide for students with creative ideas which can be transformed into successful companies.',
    'Providing Mentorship through individuals for students launching their start-ups.',
    'Having realised the fulfilment of the aim of \'Promoting starting up\', I-cell organises different kinds of quizzes, events and also workshops.'
  ]
  ngOnInit(): void {
  }

  stats = [
    {
      count: 500,
      title: 'Events'
    },
    {
      count: 900,
      title: 'Students'
    },
    {
      count: 750,
      title: 'Experts'
    }
  ]
}
