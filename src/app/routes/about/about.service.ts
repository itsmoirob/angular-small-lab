import { Injectable } from '@angular/core';
import { Author } from './author.interface';

@Injectable()

export class AboutService {
  getAuthor(): Author {
    return {
      name: 'Robert Sherman',
      www: 'https://www.albertobasalo.dev',
      github: 'https://github.com/itsmoirob',
      linkedIn: 'https://www.linkedin.com/in/albertobasalo/',
      twitter: 'https://twitter.com/itsmoirob',
    }
  }
}
