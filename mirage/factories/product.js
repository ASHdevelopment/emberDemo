import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
      return faker.commerce.productName();
  },
  price(){
    return faker.commerce.price(1,249,2,"$");
  },
  rating(){
    return faker.random.number({min:1, max:5});
  },
  seller(){
    return faker.company.companyName();
  },
  category(){
    return faker.commerce.department();
  },
});
