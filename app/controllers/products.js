import Ember from 'ember';

export default Ember.Controller.extend({
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
