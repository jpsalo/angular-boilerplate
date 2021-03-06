import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Question } from '~interfaces/question';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cases = [
      { id: 11, name: 'Make a Case', path: 'make-a-case' },
      { id: 12, name: 'Case 2', path: 'second-case' },
      { id: 13, name: 'This is a case, too', path: 'case-too' },
      { id: 14, name: 'In case', path: 'in-case' },
    ];

    const questions = [
      { id: 11, name: 'Age' },
      { id: 12, name: 'Occupation' },
      { id: 13, name: 'Supervisor' },
    ];

    return { cases, questions };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // If the heroes array is not empty, the method below returns the highest
  // hero id + 1
  genId(questions: Question[]): number {
    return questions.length > 0 ? Math.max(...questions.map((question) => question.id)) + 1 : 11;
  }
}
