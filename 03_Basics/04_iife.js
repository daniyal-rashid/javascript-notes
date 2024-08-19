// Immediately Invoked Function Expressions (IIFE)
// IIFEs prevent pollution of the global JS scope.

// named IIFE
(function one() {
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`DB CONNECTED two ${name}`);
})("daniyal");
