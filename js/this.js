const executionContext =  {
  a: 'Oscar',
  b: 23
};

function use() {
  console.log(this.a + ' is ' + this.b + ' years old');
}

use(); // undefined is undefined years old

 // Execution context is provided to the function
use.call(executionContext); // Oscar is 23 years old

// use.call(executionContext, argsIfItHadAny);