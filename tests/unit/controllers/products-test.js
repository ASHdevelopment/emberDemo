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

//test('test table columns', function(assert){});
