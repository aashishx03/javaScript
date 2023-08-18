function squarePattern(num) {
  for (let i = 0; i <= num; i++) {
    let string = '';
    for (let j = 0; j <= num; j++) {
      string += "*"
    }
    console.log(string);
  }

}

squarePattern(6);
	