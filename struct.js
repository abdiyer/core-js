let v8 = require('v8')

function makeStruct(keys) {
    if (!keys) return null;
    const k = keys.split(', ');
    const count = k.length;
  
    /** @constructor */
    function constructor() {
      for (let i = 0; i < count; i++) this[k[i]] = arguments[i];
    }
    return constructor;
  }

  makeStruct("sdwww")

  function Movie(title, url, rating, description) {
    this.title = title;
    this.url = url;
    this.rating = rating;
    this.description = description;
}
var movies = [
    new Movie('Stuck in Love','stuck.in.love',' wefwg wr w g'),
    new Movie('Emily in Paris','emily.in.paris','7.1','fgfdsadf ef wgf  ')
];

console.log(movies[0])