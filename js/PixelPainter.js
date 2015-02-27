$(function(){

   var pixelpainter = new PixelPainter(20,20);
     $("#artboard").append(pixelpainter.artboard);
     $("#controls").append(pixelpainter.controls);



    $(".controlcell").each(function () {
      // random number between 0x000000 and 0xFFFFFF
      var random_bg_r = Math.floor(Math.random()* 256);
      var random_bg_g = Math.floor(Math.random()* 256);
      var random_bg_b = Math.floor(Math.random()* 256);

    $(this).css({
      "background" : "rgb("+random_bg_r+","+random_bg_g+","+random_bg_b+")"
    });
  });
    $(".controlcell").click(function(){
      pixelpainter.colors  = $(this).css("background-color");

      });


    $(".cell").click(function(){
      $(this).css("background-color", pixelpainter.colors);

    });

}); // end .ready()

function PixelPainter (width, height){

  //create the outermost container element
  this.artboard = createGrid(width,height);
  this.controls = createControlGrid();
  this.colors;
  // this.controls = $

  //create the boxes into the bigbox
  // var smallbox = $("<div>", { "class" : "smallbox" });

  //append grid to artboard
  // this.artboard.append(createGrid(width, height));

}

function createGrid (width, height) {
  if(height > 20) {
    alert('height cannot exceed 20');
    return;
  }
  if(width > 20) {
    alert('width cannot exceed 20');
    return;
  }
  //create div class for grid
  var grid = $("<div>", { "class" : "grid" });
  //iterate width size
  for(var i = 0; i < width; i++){
    //crete div class
      var row = $("<div>", { "class" : "row" });
    //iterate height size  
    for (var j= 0; j < height; j++){
      var cell = $("<div>", { "class" : "cell" });
      // cell.css('background-color', 'red');
      //append cell to row
      row.append(cell);
     } 
     // append row to grid
     grid.append(row);
    }
    return grid;
}

function createControlGrid(){
  var grid = $("<div>", { "class" : "controlgrid" });
  //iterate width size
  for(var i = 0; i < 8; i++){
    //crete div class
      var row = $("<div>", { "class" : "controlrow" });
    //iterate height size  
    for (var j= 0; j < 8; j++){
      var cell = $("<div>", { "class" : "controlcell" });
      // cell.css('background-color', 'red');


      //append cell to row
      row.append(cell);
     } 
     // append row to grid
     grid.append(row);
    }
    return grid;
}


//button function
  var erase = $("<div>", { "class" : "erase"});
  var clear = $("<div>", { "class" : "clear"});

//
  