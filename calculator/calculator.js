module.exports = {
  add,
  sub,
  multiply,
  divide,
  squared,
};

function add(...args) {
  return args
    .filter((v) => Boolean(v))
    .reduce((sum, value) => {
      return sum + value;
    }, 0);
}
// function add(args) {
//  var result = args.reduce(function (acc, curr))
// }
function sub(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function squared(a) {
  return a * a;
}
