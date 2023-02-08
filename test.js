function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(height) {
  for (let i = 1; i <= height; i++) {
      console.log(makeLine(i));
  }
}

// test your code by uncommenting the following line
buildTriangle(10);