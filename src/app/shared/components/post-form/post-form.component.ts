import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Icourse } from '../../models/courses';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  patchCourse !: Icourse
  postForm !: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) public course: Icourse,
    private fb: FormBuilder
  ) {

    this.patchCourse = course
    console.log(course);
    this.createForm()
    // this.postForm.patchValue(this.patchCourse)



  }

  ngOnInit(): void {
  }

  createForm() {
    console.log(this.patchCourse);
    this.postForm = this.fb.group({
      description: [this.patchCourse.description,Validators.required],
      longDescription: [this.patchCourse.longDescription,Validators.required],
      category: [this.patchCourse.category,Validators.required],
     
      

    })
  }



}
