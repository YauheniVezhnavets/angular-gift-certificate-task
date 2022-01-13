import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FeaturesModule } from './features/features.module';
import { HeaderCompnent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GiftCertificateListComponent } from './features/gift-certificate-list/gift-certificate-list.component';
import { GiftCertificateItemComponent } from './features/gift-certificate-item/gift-certificate-item.component';


// const routes:  [
//   { path: '', pathMatch: 'full', redirectTo: 'home'},
//   { path: 'home', component: HomeComponent},
//   { path: 'certificates', component: GiftCertificateListComponent},
//   { path: 'certificates/:id', component: GiftCertificateItemComponent}
//   // { path: 'add-certificate', component: CertificateFormComponent}
// ];
@NgModule({
  declarations: [
    AppComponent, HeaderCompnent, FooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FeaturesModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
