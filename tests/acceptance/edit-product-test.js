import { test } from 'qunit';
import moduleForAcceptance from 'ember-demo/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit product');

test('edit a product from the home page', function(assert) {
  assert.expect(10);

  //create 5 records using mirage
  server.createList('product', 5);
  let prodName = null;
  let newProdName = 'A New Product Name';

  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'index', 'on the main homepage');
  });

  andThen(function() {
    click('.productLink');
  });

  andThen(function() {
    assert.equal(currentPath(), 'products.index', 'navigate to products home page');
  });

  andThen(function(){
    let row5 = find('table tr')[5];
    let firstCol = $(row5).find('td').first();
    prodName = firstCol.text().trim();
    assert.ok(prodName, 'prodName exists');
    firstCol.find('a').click();
  });

  andThen(function() {
    assert.equal(currentPath(), 'products.edit', 'navigate to products edit page');
    let prodInp = $('input#name');
    assert.equal(prodInp.val(), prodName, 'the product name is in the input');
    fillIn('input#name', newProdName);
  });

  andThen(function(){
    let prodInp = $('input#name');
    assert.equal(prodInp.val(), newProdName, 'the product name has been updated in the input');

    let row5 = find('table tr')[5];
    let firstCol = $(row5).find('td').first();
    let tableProductNameText = firstCol.text().trim();
    assert.equal(tableProductNameText, prodName, 'prodName in the parent table has not been changed yet (no 2 way binding)');
    assert.notEqual(prodName, newProdName, `product name (${prodName}) and new product name (${newProdName}) are not the same`);
    click('button');
  });

  andThen(function() {
    //go back to products
    click('.productLink');
  });


  andThen(function() {
    assert.equal(currentPath(), 'products.index', 'navigate to products home page');
  });

  andThen(function(){
    let row5 = find('table tr')[5];
    let firstCol = $(row5).find('td').first();
    let tableProductNameText = firstCol.text().trim();
    assert.equal(tableProductNameText, newProdName, 'prodName in the parent table was changed after clicking "save"');
  });
  //
  // andThen(function(){
  //
  // });
  //
  // andThen(function(){
  //
  // });
  //
  // andThen(function(){
  //
  // });
  //
  // andThen(function(){
  //
  // });
  //
  // andThen(function(){
  //
  // });
  //
  // andThen(function(){
  //
  // });

});
