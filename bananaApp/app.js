var faker = require('faker');
function sayHelloToMany(){

  var name;
  for (var i = 0; i < 10; i++){
    name = faker.name.findName();
    console.log('Hi there ' + name + '!');
  }
}

module.exports.name = 'Hello Botter';
