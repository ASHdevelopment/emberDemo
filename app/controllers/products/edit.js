import Ember from 'ember';

const {
  get,
  computed
} = Ember;

export default Ember.Controller.extend({
  name:computed('model.name', function(){
    return get(this, 'model.name');
  }),
  rating:computed('model.rating', function(){
    return get(this, 'model.rating');
  }),
  actions:{
    submitForm(){
      //the parent route will need to know which record to look up
      const productId = get(this, 'model.id');
      const productName = get(this, 'name');
      const productRating = get(this, 'rating');
      const fields = {
        id:productId,
        name:productName,
        rating:productRating
      };
      //DON'T DO THIS
//      let model = get(this, 'model')
//      model.set('name', productName)
      this.send('updateProduct', fields);
    }
  }
});
