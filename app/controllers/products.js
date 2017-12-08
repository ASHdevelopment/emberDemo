import Controller from '@ember/controller';
import { get } from '@ember/object';	
import { computed } from '@ember/object';

export default Controller.extend({
  highestRatedProduct:computed('model.@each.rating', function(){
    //TODO: need unit tests
    let prods = get(this, 'model');

    let highestRated = prods.reduce( (a, b) => {
      //ideally we wouldn't use a transform to add a $ string, but this is
      //for demo purposes only. In the real world, we wouldn't need to parseFloat
      let thisRate = get(b, 'rating');
      let highRate;
      try{
        highRate = get(a, 'rating');
      } catch (e){
        highRate = 0;
      }

      return thisRate > highRate ? b : a;
    });

    return highestRated;


  }),
  leastExpensiveProduct:computed('model.@each.price', function(){
    //TODO: need unit tests
    let prods = get(this, 'model');

    function removeDollars(str){
      return parseFloat(str.replace(/[^0-9.]+/g,""));
    }

    let leastExp = prods.reduce( (a, b) => {
      //ideally we wouldn't use a transform to add a $ string, but this is
      //for demo purposes only. In the real world, we wouldn't need to parseFloat
      let thisPrice = removeDollars(get(b, 'price'));
      let lowPrice;
      try{
        lowPrice = removeDollars(get(a, 'price'));
      } catch (e){
        lowPrice = 99999;
      }

      return thisPrice < lowPrice ? b : a;

      // if(thisPrice < lowPrice) {
      //   return b;
      // } else {
      //   return a;
      // }
    });

    return leastExp;
  }),
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
