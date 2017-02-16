
var beerReviewApp = function() {
  var beers=[];
  var addBeer=function(name, category, rating){
    var b={
      name: name,
      category:category,
      rating: rating
    };
    beers.push(b);
  };//addBeer
  var updateBeers = function(){
    $('ul li').remove();
    for (var i = 0;i < beers.length;i++){
      $('.beers-list').append('<li>Name: ' + beers[i].name + ' Category: '
      +beers[i].category+' Rating: '+beers[i].rating+'</li>');
    }//for
  };//updateBeers

  return {
    addBeer: addBeer,
    updateBeers: updateBeers
  }
}//app
var app=beerReviewApp();
$('.post-beer').on('click', function(){
  var name = $('.beer-input').val();
  var cat = $('.category-input').val();
  var rate = $('#select').val();
  app.addBeer(name,cat,rate);
  app.updateBeers();
});// event handler for  POST button
$('#sort').on('click',function(){
  beers.sort(function(a, b) {
    return a.rating - b.rating;
});
  updateBeers();
});//event handler for SORT button
$('#rev').on('click',function(){
  beers.sort(function(a, b) {
    return a.rating - b.rating;
});
  beers.reverse();
  updateBeers();
});
