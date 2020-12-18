import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { RedDirective } from './directives/red.directive';
import { HomeComponent } from './components/views/home/home.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { HttpClientModule } from '@angular/common/http';
import { CpfPipe } from './pipes/cpf.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { ClientDetailComponent } from './components/client/client-detail/client-detail.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { AddPhoneComponent } from './components/modal/add-phone/add-phone.component';
import { AddAddressComponent } from './components/modal/add-address/add-address.component';
import { DeleteComponent } from './components/modal/delete/delete.component';
import { LoginComponent } from './components/views/login/login.component';
import { MainAddressComponent } from './components/modal/main-address/main-address.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RedDirective,
    HomeComponent,
    ClientCreateComponent,
    CpfPipe,
    PhonePipe,
    ClientDetailComponent,
    AddPhoneComponent,
    AddAddressComponent,
    DeleteComponent,
    LoginComponent,
    MainAddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
