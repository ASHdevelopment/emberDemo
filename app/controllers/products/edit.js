import Ember from 'ember';

const {
  get,
  set,
  computed
} = Ember;

export default Ember.Controller.extend({
  name:computed('model.name', {
    get(key) {
      return get(this, 'model.name');
    },
    set(key, value) {
      return value;
    }
  }),
  rating:computed('model.rating', {
    get(key) {
      return get(this, 'model.rating');
    },
    set(key, value) {
      return value;
    }
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
