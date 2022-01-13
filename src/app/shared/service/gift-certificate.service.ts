import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GiftCertificateDto } from 'src/app/features/model/giftCerificate-dto';
import { GiftCertificate } from '../../features/model/giftCertificate';

@Injectable({
  providedIn: 'root'
})
export class GiftCertificateService {

  private apiServerUrl = 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/certificates'; 

  constructor(private http:HttpClient) { }


  public getGiftCertificates(): Observable<GiftCertificate[]>{

    return this.http.get(this.apiServerUrl+'?page=0').pipe(map((data:any)=>{

      let giftCertificateList = data["_embedded"]["giftCertificateDtoList"];

      return giftCertificateList.map(function(giftCertificate: any): GiftCertificate{

          return new GiftCertificate(giftCertificate.id,giftCertificate.name,giftCertificate.company,
            giftCertificate.shortDescription, giftCertificate.longDescription, giftCertificate.pathToCertificatePicture,
            giftCertificate.price,giftCertificate.duration,giftCertificate.createDate,
            giftCertificate.lastUpdateDate,giftCertificate.tags);
        
        });
  }));
  }


  public getGiftCertificate(giftCertificateId:number): Observable<GiftCertificate>{

      return this.http.get<GiftCertificate>(this.apiServerUrl+'/'+giftCertificateId);   
      
    }

    public addGiftCertificate(giftCertificateDto:GiftCertificateDto): Observable<GiftCertificateDto>{

      return this.http.post<GiftCertificateDto>(this.apiServerUrl,giftCertificateDto);   
      
    }

}