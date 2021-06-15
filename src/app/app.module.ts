import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaginationComponent } from './pagination/pagination.component';
import { StringFilterPipe } from './pipes/string-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, NgxPaginationModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StringFilterPipe,
    PaginationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
