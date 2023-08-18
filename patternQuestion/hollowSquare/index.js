// print this hollow square pattern

// *****
// *   *
// *   *
// *   *
// *****

function starLine(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    str += "*";
  }
  console.log(str);
}

function spacedStar(n) {
  let str = "";
  str += "*";
  for (let i = 1; i < n - 1; i++) {
    str += " ";
  }
  str += "*";
  console.log(str);
}

// starLine(5);
// spacedStar(5);
// starLine(8);
// spacedStar(8);

function hollowPattern(n) {
  starLine(n);
  for (let i = 1; i < n - 1; i++) {
    spacedStar(n);
  }
  starLine(n);
}

hollowPattern(5);
hollowPattern(10);
