import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icourse, Icourses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  courseUrl = `${environment.baseUrl}/courses`

  private _http = inject(HttpClient)
  constructor() { }

  getAllPosts(): Observable<Array<Icourse>> {
    return this._http.get<Icourses>(this.courseUrl)
      .pipe(
        map(res => { return res['payload'] })
      )
  }

}
