import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/main.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-girl',
  templateUrl: './girl.component.html',
  styleUrls: ['./girl.component.scss']
})
export class GirlComponent implements OnInit {
  isLoading: boolean = true;
  listOfBoots: any[] = [];
  data: any[] = [];
  
  constructor(
    private mainService: MainService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mainService
    .fetchWomanProducts()
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
