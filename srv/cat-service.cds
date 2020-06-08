using my.bookshop as my from '../db/data-model';

service CatalogService @(requires: ['system-user','authenticated-user']){
  entity Books as projection on my.Books;
  entity Authors @readonly as projection on my.Authors;
  entity Orders @insertonly as projection on my.Orders;
}