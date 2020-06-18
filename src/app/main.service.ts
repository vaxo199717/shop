import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

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
  fetchNikeProducts(): Observable<any> {
    return this.httpClient.get('assets/data/nike.json');
  };
  fetchAdidasProducts(): Observable<any> {
    return this.httpClient.get('assets/data/adidas.json');
  };
  fetchReebokProducts(): Observable<any> {
    return this.httpClient.get('assets/data/reebok.json');
  };
  fetchPumaProducts(): Observable<any> {
    return this.httpClient.get('assets/data/puma.json');
  };
  fetchNewBalanceProducts(): Observable<any> {
    return this.httpClient.get('assets/data/newbalance.json');
  };
  fetchWomanProducts(): Observable<any> {
    return this.httpClient.get('assets/data/woman.json');
  }
  fetchBoyProducts(): Observable<any> {
    return this.httpClient.get('assets/data/boy.json');
  }
  fetchChildProducts(): Observable<any> {
    return this.httpClient.get('assets/data/child.json');
  }
}
