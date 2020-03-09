// This function defines a Chiasm component that draws a colored rectangle using D3.js.
function ColoredRectangle() {

  // Construct a Chiasm component instance,
  // specifying default values for public properties.
  var my = new ChiasmComponent({

    // The color of the rectangle, a CSS color string.
    color: "white"

  });

  // Initialize an SVG Group element for containing this component.
  var svg = my.initSVG();

  // Add a background rectangle to the SVG Group element using D3.
  var rect = d3.select(svg).append("rect");

  // Set the rectangle color to be the configured color.
  my.when("color", function (color){
    rect.attr("fill", color);
  });

  // Respond to dynamic width and height.
  // "box" is a special property set by chiasm-layout.
  my.when("box", function (box) {

    // Set the size of the background rectangle.
    rect
      .attr("width", box.width)
      .attr("height", box.height);

  });
       
  // Set up the rectangle so that when you click on it, it changes color.
  rect.on("click", function (){
    my.color = randomColor();
  });
  
  // Generates a random color.
  function randomColor(){
    return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
  }
  
  // Generates a random integer between 0 and 255.
  function rand(){
    return Math.floor(Math.random() * 256)
  };

  return my;
}
