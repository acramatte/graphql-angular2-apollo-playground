import {Component, OnInit} from '@angular/core';
import {Angular2Apollo} from 'angular2-apollo';
import gql from 'graphql-tag';
import 'rxjs/add/operator/map';

const GetAllPeople = gql`
  query getAllPeople {
    allPeople{
      id,
      username,
      firstName,
      lastName
    }
  }
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allPeople$;

  constructor(private apollo: Angular2Apollo) {
  }

  ngOnInit(): void {
    this.allPeople$ = this.apollo.watchQuery({query: GetAllPeople})
      .map(({data}) => data.allPeople);
  }
}
