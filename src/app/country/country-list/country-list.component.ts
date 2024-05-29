import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { CountryResult } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  countries: CountryResult[]=[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    debugger;
    this.countryService.getCountries().subscribe(data => {
      if (data.successful) {
        this.countries = data.result;
      }

    });
  }

  deleteCountry( idCountry: string ) {
    this.countryService.deleteCountry(idCountry);
  }
}
