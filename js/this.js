const executionContext =  {
  a: 'Oscar',
  b: 23
};

function use() {
  console.log(this.a + ' is ' + this.b + ' years old');
}

use(); // error: this is undefined

// -----------------------------------------------------------

 // Execution context is provided to the function
use.call(executionContext); // Oscar is 23 years old

// use.call(executionContext, argsIfItHadAny);

const bound = use.bind(executionContext);

bound(); // Oscar is 23 years old