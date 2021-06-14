import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPaginationModule],
  declarations: [AppComponent, HelloComponent, PaginationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
