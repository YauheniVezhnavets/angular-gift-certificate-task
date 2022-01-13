import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftCertificateFormComponent } from './features/gift-certificate-form/gift-certificate-form.component';
import { GiftCertificateItemComponent } from './features/gift-certificate-item/gift-certificate-item.component';
import { GiftCertificateListComponent } from './features/gift-certificate-list/gift-certificate-list.component';
import { HomeComponent } from './features/home/home.component';
import { TagComponent } from './features/tag/tag.component';
import { UserComponent } from './features/user/user.component';

const routes: Routes = [
  { path: 'tags', component: TagComponent },
  { path: 'certificates', component:  GiftCertificateListComponent },
  { path: 'certificates/:id', component:  GiftCertificateItemComponent },
  { path: 'add-certificate', component:  GiftCertificateFormComponent },
  { path: 'users', component:  UserComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
