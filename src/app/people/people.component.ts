import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people;
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  constructor() { }

  mutateClicked() {
  }

  deleteClicked() {
    this.onDelete.emit(this.people.id);
  }
}
