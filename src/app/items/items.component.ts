import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  query: string = '';
  queryCtrnl: FormControl = new FormControl('');

  constructor(
   private router: Router,
   private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.queryCtrnl
          .valueChanges
          .pipe(
            debounceTime(500),
            distinctUntilChanged()
          ).subscribe(
             query => this.updateQueryParams(query)
          )
  }

  updateQueryParams(query: string) {
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams: { query: query ? query : ''},
        queryParamsHandling: 'merge'
      });
  };
  cleartext(){
    this.queryCtrnl.reset()
  }
}