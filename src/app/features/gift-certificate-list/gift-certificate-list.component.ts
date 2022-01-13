import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GiftCertificateService } from '../../shared/service/gift-certificate.service';
import { GiftCertificate } from '../model/giftCertificate';

@Component({
  selector: 'app-gift-certificate',
  templateUrl: './gift-certificate-list.component.html',
  styleUrls: ['./gift-certificate-list.component.scss']
})
export class GiftCertificateListComponent implements OnInit {

  public giftCertificates: GiftCertificate[]=[];
  public giftCertificate: GiftCertificate | undefined;
  
  
  constructor(private giftCertificateService:GiftCertificateService) { }
   
  
  ngOnInit(): void {
  
      this.getGiftCertificates();
  
    }
  
  public getGiftCertificates():void{
    this.giftCertificateService.getGiftCertificates().subscribe(
      (response:GiftCertificate[])=>{
        this.giftCertificates = response;
        console.log(this.giftCertificates);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);      
      }
    );
   }
  }
  
