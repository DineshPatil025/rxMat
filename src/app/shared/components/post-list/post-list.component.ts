import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../models/courses';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  @Input() courseArr!: Array<Icourse>
  constructor() { }

  ngOnInit(): void {
  }

}
