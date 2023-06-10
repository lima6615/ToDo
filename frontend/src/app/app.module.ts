import { NgModule } from '@angular/core';
import { FlexLayoutModule, GridModule, FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialAppModule } from './pages/shared/material-app.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    GridModule,
    FlexModule,
    RouterModule,
    MaterialAppModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
