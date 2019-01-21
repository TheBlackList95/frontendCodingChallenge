import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RepositoryService {
  // PROPERTIES
  apiUrl = 'https://api.github.com/search/repositories?q=created:2017-10-22&sort=stars&order=desc&page=';

  // CONSTRUCTOR
  constructor(private http: HttpClient) { }

  // METHODS
  getRepositories(date, page) {
    return this.http.get(this.apiUrl + page);
  }
}
