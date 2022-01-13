import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GiftCertificateService } from 'src/app/shared/service/gift-certificate.service';
import { GiftCertificate } from '../model/giftCertificate';


@Component({
  selector: 'app-gift-certificate-item',
  templateUrl: './gift-certificate-item.component.html',
  styleUrls: ['./gift-certificate-item.component.scss']
})
export class GiftCertificateItemComponent implements OnInit {

  public giftCertificate: GiftCertificate|undefined;

  
  constructor(private giftCertificateService:GiftCertificateService, private route: ActivatedRoute,
    private router: Router){ }

  ngOnInit(): void {
     
   this.route.params.subscribe(params => {
 
      return this.getGiftCertificate(params['id']);
          
    });
  }


    public getGiftCertificate(giftCertificateId:number):void{
    this.giftCertificateService.getGiftCertificate(giftCertificateId).subscribe(
      (response:GiftCertificate)=>{
        this.giftCertificate = response;
     //   console.log(this.giftCertificate);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);      
      }
    );
   }

}
