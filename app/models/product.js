import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  name: attr('string'),
  price: attr('string'),
  rating: attr('number'),
  seller: attr('string'),
  category: attr('string'),
});
