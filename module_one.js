// Modules
// CommonJS, every file is a module (by default)

const sayHi = function (name) {
  console.log(`Hello there ${name}`);
};

module.exports = sayHi;
console.log(module);
