import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rebook',
  templateUrl: './rebook.component.html',
  styleUrls: ['./rebook.component.scss']
})
export class RebookComponent implements OnInit {

  isLoading: boolean = true;
  listOfBoots: any[] = [];
  data: any[] = [];

  constructor(
    private mainService: MainService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.mainService
      .fetchReebokProducts()
      .pipe(
        delay(1500)
      )
      .subscribe(data => { this.isLoading = false; this.listOfBoots = data; this.data = data });

    this.activatedRoute
      .queryParams.subscribe(({ query }) => this.searchBoots(query));

  }

  searchBoots(query: string) {
    this.listOfBoots = this.data.filter((boot) => {
      return boot.model.toLowerCase().includes(query.toLowerCase()) ||
        boot.year.toLowerCase().includes(query.toLowerCase())
    })

  };
}
