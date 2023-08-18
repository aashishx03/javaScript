// print this Downward triangle pattern

// *****
// ****
// ***
// **
// *

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern(5);
