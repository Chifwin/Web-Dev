import {Component, OnInit} from '@angular/core';
import {Vacancy} from "./models";
import {CompaniesService} from "./services/companies.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';

  companies: Vacancy[] = [];

  constructor(private company_serv: CompaniesService) {
  }

  ngOnInit() {
    this.company_serv.get_companies().subscribe((data) => {
        this.companies = data;
      }
    )
  }

}
