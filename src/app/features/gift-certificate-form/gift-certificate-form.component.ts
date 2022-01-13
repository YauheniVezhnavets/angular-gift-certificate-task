import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { GiftCertificate } from '../model/giftCertificate';
import { Tag } from '../model/tag';
import {HttpErrorResponse} from "@angular/common/http";
import { GiftCertificateService } from 'src/app/shared/service/gift-certificate.service';
import { GiftCertificateDto } from '../model/giftCerificate-dto';

@Component({
  selector: 'app-gift-certificate-form',
  templateUrl: './gift-certificate-form.component.html',
  styleUrls: ['./gift-certificate-form.component.scss']
})
export class GiftCertificateFormComponent implements OnInit {
 
  
 
  constructor(private giftCertificateService: GiftCertificateService) { }
  
  giftCertificateForm:FormGroup = new FormGroup ({
  
    company: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    tags: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    duration: new FormControl('',[Validators.required,Validators.min(1),Validators.max(365)]),
    shortDescription: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    price: new FormControl('',[Validators.required,Validators.min(1),Validators.max(10000)]),
    pathToCertificatePicture: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    longDescription: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),

    });
  


  ngOnInit(): void {
    console.log(this.giftCertificateForm.value);
    
  }
  

  onSubmit() {

    console.log(this.giftCertificateForm.value);
    
 }
}
