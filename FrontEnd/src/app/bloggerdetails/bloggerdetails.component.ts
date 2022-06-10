import { Component, OnInit } from '@angular/core';
import { faFacebookF, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faComments, faEnvelopeCircleCheck, faHeart, faHome, faNewspaper, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from 'src/services/posts.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-bloggerdetails',
  templateUrl: './bloggerdetails.component.html',
  styleUrls: ['./bloggerdetails.component.css']
})
export class BloggerdetailsComponent implements OnInit {
  followers=[{follower:''}]; 


  constructor(private router:Router,private postService:PostsService) { }
  faheart=faHeart
  fatwitter=faTwitter
  fagithub=faGithub
  fayoutube=faYoutube
  fainstagram=faInstagram
  fafacebook=faFacebookF
  fafollowers=faPeopleGroup
 
  followersno:any
  addFollowers()
  {
    this.followersno+=1
  }

  ngOnInit(): void {
    this.postService.getFollowers().subscribe((data)=>{
      this.followers=JSON.parse(JSON.stringify(data));
      console.log(this.followers)
      this.followersno=120+this.followers.length;
    });
  }
  

}
