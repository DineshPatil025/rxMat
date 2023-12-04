import { Component, Input, OnInit } from '@angular/core';
import { Icourse } from '../../models/courses';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PostFormComponent } from '../post-form/post-form.component';
import { DialogConfig } from '@angular/cdk/dialog';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  @Input() courseArr!: Array<Icourse>
  constructor( private _matDialog : MatDialog) { }

  ngOnInit(): void {
  }



  onEdit(course:Icourse){
    console.log(course);
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.data = course;
    this._matDialog.open(PostFormComponent, dialogConfig)



    
    
  }

}
