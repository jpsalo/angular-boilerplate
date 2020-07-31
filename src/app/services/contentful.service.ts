import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { Case } from '~interfaces/case';
import { environment } from '../../environments/environment';
import { Bio } from '~interfaces/bio';

const CONFIG = {
  ...environment.contentful,
  contentTypeIds: {
    bio: 'bio',
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

  private async getEntries(query?: object): Promise<Entry<any>[]> {
    const response = await this.cdaClient.getEntries(query);
    return response.items;
  }

  async getBio(fields: Array<string>): Promise<Entry<Bio>> {
    const selectFields = fields.map((field) => `fields.${field}`).join(',');
    const response = await this.getEntries({ content_type: CONFIG.contentTypeIds.bio, select: selectFields });
    return response.length ? response[0] : Promise.reject({ message: 'not found' });
  }

  getCases(): Promise<Entry<any>[]> {
    return this.getEntries({
      content_type: CONFIG.contentTypeIds.case,
      select: 'fields.slug,fields.title,fields.description',
    });
  }

  async getCase(slug: string): Promise<Entry<Case>> {
    const response = await this.getEntries({ content_type: CONFIG.contentTypeIds.case, 'fields.slug': slug });
    return response.length ? response[0] : Promise.reject({ message: 'not found' });
  }
}
