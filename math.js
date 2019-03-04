//production code;

module.exports = {
  add,
  multiply
}


function add(a, b) {
  if ( typeof a === 'string' || typeof b === "string") {
    throw new Error('must be numbers');
  }
  return a + b;
}

function multiply(a, b) {
  return a * b;
}