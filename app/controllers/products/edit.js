import Controller from '@ember/controller';
import { get } from '@ember/object';	
import { computed } from '@ember/object';

export default Controller.extend({
  name:computed('model.name', {
    get() {
      return get(this, 'model.name');
    },
    set(key, value) {
      return value;
    }
  }),
  rating:computed('model.rating', {
    get() {
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
