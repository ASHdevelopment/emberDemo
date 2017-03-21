# Ember-demo

## ASH Documentation
This assumes you've gone through ASH's Ember setup documentation. If you have not or need this information, contact the Front End Team.

To get started, clone this repo locally and `ember init`. Each branch will take you through subsequent steps.

## Shorthand
`ember g` = `ember generate`
`ember s` = `ember serve`

## Instructions
### The following should already be complete
1. Open `package.json` and remove the ember welcome package (this step is already done in this branch)
1. `ember g template application` to create a template for your entire app's layout
1. `ember g route index products products/edit`
1. Add headings to each route's templates
1. In application.hbs, add `link-to` helpers for the index and product routes

### Current challenges instructions (do these before moving on to next step/branch)
1. `ember install ember-cli-mirage`
1. add a `factory` for `product`. Make sure you use a `RestSerializer` in your Mirage setup and App, since we use REST at ASH. `ember g mirage-model product`. You'll also need to create a list of products in `scenarios`.
1. Create a model in your application for `product`, return all records from the `products`, route and add the API endpoint to your mirage config.
1. Add a table in `products.hbs` to display the following fields: 'name','price', 'rating' 'seller', and 'category'.


## Ember Documentation...
The following is Ember's default documentation, so it has been left in this document.

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-demo`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
