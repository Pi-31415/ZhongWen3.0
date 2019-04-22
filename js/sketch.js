if (is_p5_on == true) {
  var sketch = function(p) {
    p.setup = function() {
      var wid = p.displayWidth;
      var hid = p.displayHeight;
      p.createCanvas(wid, hid);
      p.strokeWeight(5)
      p.stroke(0);
    }
    p.touchMoved = function() {
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      return false;
    }

    p.clrscr = function() {
      p.clear();
      return false;
    }
  };
  new p5(sketch, 'p5canvas');
}
else{
  console.log("Destroying P5 Canvas");
  remove();
}

//Clear function, basically reloads the page
function clearscreen() {
  //Needs some way to store current mandarin word ID
  console.log("Turning on p5");
  is_p5_on = true;
  switchpage('write');
}
