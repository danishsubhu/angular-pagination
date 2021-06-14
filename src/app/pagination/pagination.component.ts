import { Component, Input } from '@angular/core';

@Component({
  selector: 'static-pagination',
  templateUrl: `pagination.component.html`,
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  tableHeaders = [];
  tableRows = [];
  total = null;
  p: number = 1;
  constructor() {}

  ngOnInit() {
    this.tableHeaders = ['userID', 'userName'];
    this.tableRows = [{ userID: '1', userName: 'name1' }];

    for (var i = 0; i < 100; i++) {
      this.tableRows.push({ userID: i, userName: 'name' + i });
    }
  }
}
