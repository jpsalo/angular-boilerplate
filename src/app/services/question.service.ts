import { Injectable } from '@angular/core';
import { Question } from '~interfaces/question';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private questionsUrl = 'api/questions'; // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) {}

  private log(message: string) {
    this.messageService.add(`QuestionService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed ${error.message}`);

      // Let the app keep running by returning empty result
      return of(result as T);
    };
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl).pipe(
      tap((_) => this.log('fetched questions')),
      catchError(this.handleError<Question[]>('getQuestions', []))
    );
  }

  getQuestion(id: number): Observable<Question> {
    const url = `${this.questionsUrl}/${id}`;
    return this.http.get<Question>(url).pipe(tap((_) => this.log(`fetchd hero id=${id}`)));
  }
}
