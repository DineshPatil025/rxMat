import { Component, OnInit, inject } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Observable, observable } from 'rxjs';
import { Icourse } from '../../models/courses';

@Component({
  selector: 'app-post-dash',
  templateUrl: './post-dash.component.html',
  styleUrls: ['./post-dash.component.scss']
})
export class PostDashComponent implements OnInit {



  coursesArr !: Array<Icourse>
  begcoursesArr !: Array<Icourse>
  advcoursesArr !: Array<Icourse>

  private _coursesService = inject(PostsService)

  constructor() { }

  ngOnInit(): void {

    this._coursesService.getAllPosts()
      .subscribe(res => {
        this.coursesArr = res;
        this.begcoursesArr = res.filter(res => res['category'] === "BEGINNER")
        this.advcoursesArr = res.filter(res => res['category'] === "ADVANCED")
   
      })

  }

}
