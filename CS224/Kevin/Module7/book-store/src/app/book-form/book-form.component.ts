import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  bookId: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log(this.bookId);
  }
}
