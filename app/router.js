import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('products', function() {
    this.route('edit', {path:'edit/:id'});
  });
  this.route('four-oh-four', { path: '/*four-oh-four:' });  
});

export default Router;
