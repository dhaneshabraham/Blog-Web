import { Component, OnInit } from '@angular/core';
import { faComments, faEnvelopeCircleCheck, faHeart, faHome, faNewspaper, faShare } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from 'src/services/posts.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-latestblogs',
  templateUrl: './latestblogs.component.html',
  styleUrls: ['./latestblogs.component.css']
})
export class LatestblogsComponent implements OnInit {

  // array for storing post details
  posts=[{imageurl:'',
  dateofpost:'',
  heading:'',
  description:'',
  pid:0}];  

  // array for storing post 'likes' details

  likes=[{postheading:''}]
  totlikes=[3]
  count1=0
  count2=0
  count3=0
  constructor(private router:Router,private postService:PostsService) { }

  addpostlike(event:any)
  {
    // const collection = document.getElementsByTagName("Button");
    // alert('button pressed'+event.target.id)
    if(event.target.id==0)
    {
      this.totlikes[0]+=1
    }
    if(event.target.id==1)
    {
      this.totlikes[1]+=1
    }
    if(event.target.id==2)
    {
      this.totlikes[2]+=1
    }
  }


  faheart=faHeart
  fahome = faHome;
  facomments=faComments
  faenvelop=faEnvelopeCircleCheck
  fanews=faNewspaper
  fashare=faShare
  pic1likesno:any
  pic2likesno:any
  pic3likesno:any
  ngOnInit(): void {

    this.postService.getPosts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
      //  console.log(this.posts)
      for(let i=0;i<this.posts.length;i++)
      {
        this.posts[i].pid=i
      }
    });

    this.postService.getPostLikes().subscribe((data)=>{
      this.likes=JSON.parse(JSON.stringify(data));

      for(let i=0;i<this.likes.length;i++)
      {
        if(this.likes[i].postheading=='Nature')
        {
          this.count1+=1
        }
        if(this.likes[i].postheading=='Animals')
        {
          this.count2+=1
        }
        if(this.likes[i].postheading=='Technology')
        {
          this.count3+=1
        }
      }
      this.totlikes[0]=this.count1;
      this.totlikes[1]=this.count2;
      this.totlikes[2]=this.count3;
      // for(let i=0;i<this.likes.length;i++)
      // {
      //   console.log(this.totlikes[i]+5)
      // }


    });

  }

}
