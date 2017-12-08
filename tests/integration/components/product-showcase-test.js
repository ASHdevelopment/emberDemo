import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product-showcase', 'Integration | Component | product showcase', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // Template block usage:
  const sampleProduct = {
    name:'Test Name'
  }

  this.set('product', sampleProduct);
  this.render(hbs`
    {{product-showcase
      product=product
    }}
  `);
  assert.equal(this.$().find('h2').text().trim(), sampleProduct.name);
});
