import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { socialLinks } from 'src/app/constants/socialLinks';
import { EmailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private mailService: EmailService
  ) { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    message: new FormControl(''),
  });


  sendEmail() {
    this.mailService.sendEmail(this.contactForm.controls['name'].value, this.contactForm.controls['email'].value, this.contactForm.controls['message'].value).subscribe((res) => {
      console.log(res)
    })
  }
  socialIcons = [
    {
      icon: 'assets/icons/whatsapp.svg',
      clickFn: () => window.open('https://api.whatsapp.com/send?phone=' + 7834899932 + '&text=%20' + "Hello ICELL", '_blank')
    },
    {
      icon: 'assets/icons/linkedin.svg',
      clickFn: () => window.open(socialLinks.linkedIn)
    },
    {
      icon: 'assets/icons/instagram.svg',
      clickFn: () => window.open(socialLinks.instagram)
    },
    {
      icon: 'assets/icons/phone.svg',
      clickFn: () => window.open('tel:7834899932', '_self')
    },
    {
      icon: 'assets/icons/email.svg',
      clickFn: () => window.open('mailto:icellnitkkr@gmail.com')
    },
    {
      icon: 'assets/icons/facebook.svg',
      clickFn: () => window.open(socialLinks.facebook)
    },
    {
      icon: 'assets/icons/messenger.svg',
      clickFn: () => window.open(socialLinks.messenger)
    },
  ]

}
