var faker = require('faker');
var syllable = require('syllable');

var haikuBot = {
  genLine: function(numSyllables){
    var phrase = faker.hacker.phrase();
    while( syllable(phrase) > numSyllables){
      phrase = phrase.split(' ');
      phrase.pop();
      phrase = phrase.join(' ');
    }
    return phrase;
  },
  genKu: function(){
    var haiku = [
      this.genLine(5),
      this.genLine(7),
      this.genLine(5)
    ].join("\n");
    return haiku;
  },
};

module.exports = haikuBot;
