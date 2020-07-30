import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Case } from '~interfaces/case';
import { environment } from '../../environments/environment';

const CONFIG = {
  ...environment.contentful,
  contentTypeIds: {
    case: 'case',
  },
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  private getEntries(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient
      .getEntries(
        Object.assign(
          {
            content_type: CONFIG.contentTypeIds.case,
          },
          query
        )
      )
      .then((res) => res.items);
  }

  getCases(): Promise<Entry<any>[]> {
    return this.getEntries({
      select: 'fields.slug,fields.title,fields.description',
    });
  }

  getCase(slug: string): Promise<Entry<Case>> {
    return this.getEntries({
      'fields.slug': slug,
    }).then((items) => (items.length ? items[0] : Promise.reject({ message: 'not found' })));
  }
}
