import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('product');
  },
  actions:{
    updateProduct(data){
      //destructure the object
      const {
        id,
        name,
        rating
      } = data;

      this.store.findRecord('product', id).then(record =>{
        record.set('name', name);
        record.set('rating', rating);
        // record.setProperties({
        //   'name':name,
        //   'rating':rating
        // });
        record.save();

      }).catch(err =>{
        console.error(err);
      });

    }
  }
});
