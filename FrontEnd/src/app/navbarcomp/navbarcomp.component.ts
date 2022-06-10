import { Component, OnInit } from '@angular/core';
import { faComments, faEnvelopeCircleCheck, faHeart, faHome, faNewspaper } from '@fortawesome/free-solid-svg-icons';

// import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbarcomp',
  templateUrl: './navbarcomp.component.html',
  styleUrls: ['./navbarcomp.component.css']
})
export class NavbarcompComponent implements OnInit {

  constructor() { }
  fahome = faHome;
  faheart=faHeart;
  facomments=faComments
  faenvelop=faEnvelopeCircleCheck
  fanews=faNewspaper
  likesno:any
  messagesno:any
  commentsno:any
  newsno:any
  ngOnInit(): void {
    this.likesno=11
    this.messagesno=11
    this.commentsno=11
    this.newsno=11

  }

}
