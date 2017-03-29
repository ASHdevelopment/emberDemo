import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
      return faker.commerce.productName();
  },
  price(){
    return faker.random.number({min:99, max:24999});
  },
  rating(){
    return faker.random.number({min:1, max:99});
  },
  seller(){
    return faker.company.companyName();
  },
  category(){
    return faker.commerce.department();
  },
});
