module.exports = {
  add,
};

function add(args) {
  const numbers = Array.isArray(args) ? args : Array.from(arguments);

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}
