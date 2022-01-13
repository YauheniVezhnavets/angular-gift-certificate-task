import { Tag } from "./tag";

export class GiftCertificateDto{
   
  
    constructor (public name: string,public company:string, public shortDescription:string,
        public longDescription:string, public pathToCertificatePicture:string, public price:number, 
        public duration: number,  public tags: Tag[]){};


}