import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', function() {
    this.route('edit', {path:'edit/:id'});
  });
  this.route('four-oh-four', { path: '/*four-oh-four:' });
  this.route('warehouses', function() {
    this.route('warehouse', {path: '/:id'});
  });
});

export default Router;
