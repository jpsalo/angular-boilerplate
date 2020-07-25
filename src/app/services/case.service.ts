import { Injectable } from '@angular/core';
import { Case } from '~interfaces/case';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '~services/message.service';
import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  private casesUrl = 'api/cases'; // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) {}

  private log(message: string) {
    this.messageService.add(`CaseService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed ${error.message}`);

      // Let the app keep running by returning empty result
      return of(result as T);
    };
  }

  getCases(): Observable<Case[]> {
    return this.http.get<Case[]>(this.casesUrl).pipe(
      tap((_) => this.log('fetched cases')),
      catchError(this.handleError<Case[]>('getCases', []))
    );
  }

  getCase(path: string): Observable<Case> {
    return this.getCaseByPath(path).pipe(map((array) => array[0]));
  }

  getCaseByPath(path: string): Observable<Case[]> {
    return this.http.get<Case[]>(`${this.casesUrl}/?path=${path}`).pipe(
      tap((x) => (x.length ? this.log(`found cases matching "${path}"`) : this.log(`no cases matcing "${path}"`))),
      catchError(this.handleError<Case[]>('getCase', []))
    );
  }
}
