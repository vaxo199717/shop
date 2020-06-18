import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-boy',
  templateUrl: './boy.component.html',
  styleUrls: ['./boy.component.scss']
})
export class BoyComponent implements OnInit {
  isLoading: boolean = true;
  listOfBoots: any[] = [];
  data: any[] = [];
  
  constructor(
    private mainService: MainService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mainService
    .fetchBoyProducts()
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
