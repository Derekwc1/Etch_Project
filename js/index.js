$('#btn').click(function() {
  var grid = prompt(" Select your size: 1 - 50")
  var high = grid;
  var z_width = (600 / grid)-.5;
  var z_height = (600 / grid)-.1;
  var i = 0;
  
 $('#paint .grid').remove()
  
 while (i < grid * grid ) {
   
   $('#paint').append('<div class="grid"></div>')
   
   $('.grid').css('width',z_width); 

   $('.grid').css('height',z_height); 

      i++
  }

  
$('.grid').mouseenter(function(){ 
  var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
jQuery(".font-style").animate({color: newColor}, 2000);
$(this).css("background-color", newColor ); 

//$('.grid').mouseenter(function(){ 
//$(this).addClass('grid_color'); 
})
})


