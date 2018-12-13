setTimeout(function(){
  console.log('Slider Init');
  var slider = tns({
      container: '.slider',
      items: 1,
      slideBy: 'page',
      navPosition: 'bottom'
    });
}, 50);
