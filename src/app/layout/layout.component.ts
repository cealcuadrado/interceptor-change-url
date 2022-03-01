import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  data = '';

  constructor(
    private post: PostService
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.post.getPosts().subscribe(posts => {
      this.data = JSON.stringify(posts);
    });
  }
}
