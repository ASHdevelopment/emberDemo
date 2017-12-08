import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
//    return dollars
    let dollars = serialized / 100;
    return `$${dollars.toFixed(2)}`;
  },

  serialize(deserialized) {
    //return cents
    deserialized = parseFloat(deserialized.replace(/[^0-9.]+/g,""));
    return deserialized * 100;
  }
});
