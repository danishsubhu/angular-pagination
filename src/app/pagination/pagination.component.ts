import { Component, Input } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

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
  public filter: string = '';

  public config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };
  constructor() {}

  ngOnInit() {
    this.tableHeaders = ['UserID', 'UserName'];

    for (var i = 1; i < 100; i++) {
      this.tableRows.push({ UserID: i, UserName: 'Name ' + i });
    }
  }
}
