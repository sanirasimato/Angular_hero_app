import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

// @Injectable({
//   providedIn: 'root'
// })
export class InMemoryDataServiceService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 100, name: 'Mr. Nice'},
      {id: 101, name: 'Mr. John'},
      {id: 102, name: 'Ms. Kate'},
      {id: 103, name: 'Mr. Doe'},
      {id: 104, name: 'Ms. Jane'},
      {id: 105, name: 'Mr. Luka'},
      {id: 106, name: 'Mr. Dane'},
      {id: 107, name: 'Ms. Shasha'},
      {id: 108, name: 'Mr. Nato'},
      {id: 109, name: 'Ms. Alice'},
  ];

  return {heroes};
  }

  constructor() { }
}
