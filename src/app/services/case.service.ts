import { Injectable } from '@angular/core';
import { Case } from '~interfaces/case';
import { ContentfulService } from '~services/contentful.service';
import { from, Observable, of } from 'rxjs';
import { MessageService } from '~services/message.service';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CaseService {
  constructor(private contentfulService: ContentfulService, private messageService: MessageService) {}

  private log(message: string) {
    this.messageService.add(`CaseService: ${message}`);
  }

  // TODO: inheritance
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
    return from(this.contentfulService.getCases()).pipe(
      tap((_) => this.log('fetched cases')),
      map((cases) => cases.map((theCase) => theCase.fields)), // FIXME: 'theCase'
      catchError(this.handleError<Case[]>('getCases', []))
    );
  }

  getCase(slug: string): Observable<Case> {
    return from(this.contentfulService.getCase(slug)).pipe(
      tap((x) => (x ? this.log(`found case matching "${slug}"`) : this.log(`no case matching "${slug}"`))),
      map((theCase) => theCase.fields), // FIXME: 'theCase'
      catchError(this.handleError<Case>('getCase', null))
    );
  }
}
