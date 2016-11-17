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

const UpdatePeople = gql`
  mutation updateAPerson {
    updatePerson(person: {
      id: "PPBqWA9",
      lastName: "Luperculle"
    }) {
      firstName,
      lastName,
      id,
      username
    }
  }
`;

const DeletePeople = gql`
  mutation deletePerson{
    deletePerson(id: "ByLubHbex") {
      firstName,
      lastName,
      username
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

  mutateClicked() {
    this.apollo.mutate({
      mutation: UpdatePeople
    }).then(({ data }) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  deleteClicked() {
    this.apollo.mutate({
      mutation: DeletePeople
    }).then(({ data }) => {
      console.log('got data', data);
    }).catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
