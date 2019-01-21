import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { CardComponent } from './components/repository/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
