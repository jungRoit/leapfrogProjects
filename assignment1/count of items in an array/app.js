var arr = ['john','mary','sam','sam','john','john','sam','john','mary','adam'];

var output = arr.reduce((acc, name) => {
    if (!acc[name]) {
        acc[name] = 1;
    } else {
        acc[name] = acc[name] + 1;
    }
    return acc;
  }, {});

console.log(output);