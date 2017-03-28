import Ember from 'ember';

export default Ember.Controller.extend({
  success:null,
  error:null,
  tableHd:['Name', 'Price', 'Category', 'Seller', 'Rating'],
  tableProp:[
    {
      "name":"name",
      "link": "products.edit",
      "linkModel":"item"
    },
    {
      "name":"price"
    },
    {
      "name":"category"
    },
    {
      "name":"seller"
    },
    {
      "name":"rating"
    }
  ]
});
