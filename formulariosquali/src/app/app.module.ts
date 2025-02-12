import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormintbussComponent } from './formintbuss/formintbuss.component';

@NgModule({
  declarations: [
    AppComponent,
    FormintbussComponent  // Asegúrate de que esté aquí
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }