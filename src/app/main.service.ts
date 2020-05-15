import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchAllProducts(): Observable<any> {
       return this.httpClient.get('assets/data/all.json');
  };

}
