import {Component, OnInit} from '@angular/core';
import {Company} from "./models";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hh-front';

  companies: Company[] = [];

  constructor(private company_serv: CompanyService) {
  }

  ngOnInit() {
    this.company_serv.getCompanies().subscribe((data) => {
        this.companies = data;
      }
    )
  }

}
