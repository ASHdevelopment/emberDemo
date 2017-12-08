import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return this.store.findAll('product');
  },
  actions:{
    updateProduct(data){
      let ctrl = this.controller;
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
        ctrl.set('success', `${name} has been updated!`);
        record.save();

      }).catch(err =>{
        ctrl.set('error', `${err.message}`);
      });
    },
    willTransition(){
      this.controller.setProperties({
        'error':null,
        'success':null
      });
    }
  }
});
