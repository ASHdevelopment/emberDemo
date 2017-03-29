import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default Ember.Controller.extend({
  averageRating:computed('model.@each.rating', function(){
    let prods = get(this, 'model');
    //return a sinmple arr of numbers from model objects
    let rawRating = prods.map(product => {
      return parseFloat(get(product, 'rating'));
    });
    let sumRating = rawRating.reduce( (a,b) => {
      return a + b;
    });
    let average = sumRating / rawRating.length;
    return average.toFixed(1);
  }),
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
