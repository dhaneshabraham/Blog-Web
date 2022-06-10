import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BloggerdetailsComponent } from './bloggerdetails/bloggerdetails.component';
import { LatestblogsComponent } from './latestblogs/latestblogs.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    // NavbarcompComponent,
    BloggerdetailsComponent,
    LatestblogsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
