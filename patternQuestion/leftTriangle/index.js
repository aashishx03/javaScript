// print this pattern

// *
// **
// ***
// ****
// *****

// for this problem i think there will be 2 loops one outer and one inner
// outer loop for counting the line and in inner loop we print the star

function pattern(num) {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let k = 0; k < i + 1; k++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern(9);
