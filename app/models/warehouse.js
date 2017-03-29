import DS from 'ember-data';

const {
  attr
} = DS;

export default DS.Model.extend({
  name:attr('string'),
  location:attr('string'),
  revenue:attr('string')
});
