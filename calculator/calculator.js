module.exports = {
  add,
};

function add(args) {

  const values = Array.isArray(args) ? args : Array.from(arguments);

  return values.reduce((sum, value) => {
    if ((typeof (value) !== 'number') || Number.isNaN(value)) { throw new Error('invalid args') };
    return sum + value;
  }, 0);

}
