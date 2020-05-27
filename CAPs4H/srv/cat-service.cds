using { conv as external } from './external/conv.csn';

@path:'/browse'
service CatalogService{

   @readonly entity TestS4h as projection on external.CAPSet{
       key Campo1 as id,
       Campo2,
       Campo3
   };

}