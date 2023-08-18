// print this right angle pattern
//     *
//    **
//   ***
//  ****
// *****

// here in this solution i make three loop one outer loop for and two inner loop

function pattern(num) {
  for (let i = 1; i <= num; i++) {
    let string = "";

    //first inner loop for printing spaces
    for (let j = 0; j <= num - i; j++) {
      string += " ";
    }

    // second inner loop for printing stars
    for (let k = 0; k < i; k++) {
      string += "*";
    }
    console.log(string);
  }
}

pattern(6);
