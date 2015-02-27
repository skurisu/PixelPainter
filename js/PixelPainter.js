// $(document).ready(){
  //render box container
  function PixelPainter (width, height){

    //create the outermost container element
    this.artboard = $("<div>", { "class" : "box" });

    //create the boxes into the bigbox
    var smallbox = $("<div>", { "class" : "smallbox" });

    //append grid to artboard
    this.artboard.append(createGrid(width, height));

  }

  function createGrid (width, height) {
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
// });