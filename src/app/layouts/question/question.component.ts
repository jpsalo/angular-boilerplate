import { Component, OnInit, Input } from '@angular/core';
import { Question } from '~interfaces/question';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '~services/question.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor(private route: ActivatedRoute, private questionService: QuestionService, private location: Location) {}

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questionService.getQuestion(id).subscribe((question) => (this.question = question));
  }

  goBack(): void {
    this.location.back();
  }
}
