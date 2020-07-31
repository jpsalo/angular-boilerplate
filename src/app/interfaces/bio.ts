import { Asset } from 'contentful';

export interface Bio {
  slug: string;
  avatar: Asset;
  title: string;
  subtitle: string;
  description: string;
}
