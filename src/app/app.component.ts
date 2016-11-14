import {Component, OnInit} from '@angular/core';
import {Angular2Apollo} from 'angular2-apollo';
import gql from 'graphql-tag';

const GetAllPeople = gql`
  query getAllPeople {
    allPeople{
      id,
      username,
      email
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean;
  allPeople: any;

  constructor(private apollo: Angular2Apollo) {
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GetAllPeople
    }).subscribe(({data}) => {
      this.loading = data.loading;
      this.allPeople = data.allPeople;
    });
  }
}
