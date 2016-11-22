function greet(who) {
  console.log('Hello ' + who + '!');
};

module.exports = greet; //exposes the greet function to a require in another file
