import { A } from '@ember/array';
import ArrayProxy from '@ember/array/proxy';
import EmberObject from '@ember/object';
import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:products', 'Unit | Controller | products', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('test table columns', function(assert){
  const subj = this.subject();
  const headings= subj.get('tableHd');
  assert.equal(headings.length, 5, 'there should be 5 table headings');
});

test('averageRating test', function(assert){
  const products = [
    EmberObject.create({name:'test', rating:2}),
    EmberObject.create({name:'test2', rating:4}),
  ];

  const model = ArrayProxy.create({
    content: A(products)
  });

  const subj = this.subject();
  subj.set('model', model);
  //controller's computed property
  const avg= subj.get('averageRating');

  assert.equal(avg, 3, 'calculating average rating');
});

test('averageRating test with fraction', function(assert){
  const products = [
    EmberObject.create({name:'test', rating:2}),
    EmberObject.create({name:'test2', rating:4}),
    EmberObject.create({name:'test3', rating:4}),
  ];

  const model = ArrayProxy.create({
    content: A(products)
  });

  const subj = this.subject();
  subj.set('model', model);
  //controller's computed property
  const avg= subj.get('averageRating');

  assert.equal(avg, 3.3, 'calculating average rating');
});
