let sketch = function(p) {
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
