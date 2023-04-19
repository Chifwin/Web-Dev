import {Component, OnInit} from '@angular/core';
import { Company } from "../models";
import { CompaniesService } from "../services/companies.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit{
  companies: Company[] = [];

  constructor(private service: CompaniesService) {
  }

  ngOnInit() {
    this.service.get_companies().subscribe((comps) =>
      this.companies = comps
    )
  }

}
