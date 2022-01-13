import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftCertificateListComponent } from './gift-certificate-list/gift-certificate-list.component';
import { UserComponent } from './user/user.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { TagComponent } from './tag/tag.component';
import { GiftCertificateItemComponent } from './gift-certificate-item/gift-certificate-item.component';
import { RouterModule } from '@angular/router';
import { GiftCertificateFormComponent } from './gift-certificate-form/gift-certificate-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TagComponent,
    UserComponent,
    OrderComponent,
    HomeComponent,
    GiftCertificateListComponent,
    GiftCertificateItemComponent,
    GiftCertificateFormComponent
  ],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule
  ],
  exports:[    
      UserComponent, OrderComponent, GiftCertificateListComponent   
  ]
})
export class FeaturesModule { }
