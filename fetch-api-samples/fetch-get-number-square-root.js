Number.prototype.squareRoot = function() {
  return fetch('https://api.mathjs.org/v4/?expr=sqrt('+this.valueOf()+')').then(function(response){return response.json()});
};

(async function(){
  var x = 10;
  console.log(await x.squareRoot());
})();
