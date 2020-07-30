
//class Cat {
   //makeSound() {
      //return `${this.constructor.name}: Meowww`;
   // }
  //}
  
 // exports = Cat; // It will not work with `new Cat();`
  // exports.Cat = Cat; // It will require `new Cat.Cat();` 
  //module.exports = Cat;
var cal = require('./mayi.js');
  var result = cal.add(1,2);
  console.log("the output is:"+result);
