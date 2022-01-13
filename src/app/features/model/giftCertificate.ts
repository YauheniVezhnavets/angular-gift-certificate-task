import { Tag } from "./tag";

export class GiftCertificate{
   

    constructor (public giftCertificateId: number, public name: string,public company:string, public shortDescription:string,
        public longDescription:string, public pathToCertificatePicture:string, public price:number, public duration: number, 
        public createDate:string,public lastUpdateDate:string, public tags: Tag[]){};


}