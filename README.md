# Ember-demo

## ASH Documentation
This assumes you've gone through ASH's Ember setup documentation. If you have not or need this information, contact the Front End Team.

To get started, clone this repo locally and `ember init`. Each branch will take you through subsequent steps.

## Initial Setup (cloning this repo)
1. Make sure you have git setup on your computer
1. Create a folder on your local computer that will eventually hold this project (the rest of the steps should be done in the command line in that folder)
1. `git clone https://github.com/ASHdevelopment/emberDemo.git`
1. `cd emberDemo` to move into the folder that was downloaded
1. `ember init`. Do not overwrite any of the files when prompted.
1. `ember s` will start the project locally in `http://localhost:4200`. Open [http://localhost:4200](http://localhost:4200) to make sure it's working. This is the fully working version of the app; for the sake of the exercise, you want to start from the ground up. So...
1. Create a new folder to start working on the stripped down, ready to start app
1. In that new folder: `git clone https://github.com/ASHdevelopment/emberDemo.git`
1. `git checkout -b step1` to check out the `step1` branch
1. `ember init`.  Do not overwrite any of the files when prompted.

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
1. `ember install ember-cli-mirage`
1. add a `factory` for `product`. Make sure you use a `RestSerializer` in your Mirage setup and App, since we use REST at ASH. `ember g mirage-model product`. You'll also need to create a list of products in `scenarios`.
1. Create a model in your application for `product`, return all records from the `products`, route and add the API endpoint to your mirage config.
1. Add a table in `products.hbs` to display the following fields: 'name','price', 'rating' 'seller', and 'category'.
1. `ember install ash-table` and use and setup `ash-table` to display the following fields: 'name','price', 'rating' 'seller', and 'category'
1. Add unit tests to make sure the controller has the correct amount of columns headings
1. Add a link to [Foundation CSS](https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.css) to give us some style
1. Add a link around the product name that links to `products/edit/[id]` so that you can edit its attributes. Make sure to update `router.js` with this path. You will also need to update your mirage config to return a single resource.
1. Add a form on the edit route that will allow you to edit the product. The form should have an action to save the record on submit
1. Make sure the products index shows the updated record attributes
1. Add an acceptance test for this case. Start at the home page, then route to products, edit, and back to products. `ember g acceptance-test edit-product`

### Current challenges instructions (do these before moving on to next step/branch)
1. Add `ember-a11y-testing` and see how we're doing with accessibility.
1. There's 100 character limit (server-side) on product names. Add `ash-countdown-input` to show the user how many characters they have left.
1. Use `ash-status-message` to confirm when the edit product feature is successful or has an error. Update your acceptance tests!
1. People are navigating to `sahara.com/prime` for some reason. We need a `404` page for our app.

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
