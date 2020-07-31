import { Injectable } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { MessageService } from './message.service';
import { Observable, of, from } from 'rxjs';
import { Bio } from '~interfaces/bio';
import { tap, catchError, map } from 'rxjs/operators';

const BIO_FIELDS = {
  hero: ['slug', 'description', 'avatar'],
};

@Injectable({
  providedIn: 'root',
})
export class BioService {
  constructor(private contentfulService: ContentfulService, private messageService: MessageService) {}

  private log(message: string) {
    this.messageService.add(`BioService: ${message}`);
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

      // TODO:better job of transforming error for user consumption
      this.log(`${operation} failed ${error.message}`);

      // Let the app keep running by returning empty result
      return of(result as T);
    };
  }

  getBioFor(purpose: string): Observable<Bio> {
    return from(this.contentfulService.getBio(BIO_FIELDS[purpose])).pipe(
      tap((_) => this.log('fetched bio')),
      map((bio) => bio.fields),
      catchError(this.handleError<Bio>('getBio', null))
    );
  }
}
