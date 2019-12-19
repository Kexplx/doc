let reg = new RegExp(/h.* /g);
let text = "hello world";

let result = reg.exec(text);
console.log(result);

// result != null => match was found.
// result[0] - the matched string ("hello "")

// result == null => no match found.

// ----------------------------------------------------------

let reg = new RegExp(/<h1>(.*)<\/h1><h2>(.*)<\/h2>/g);
let text = "<h1>Hello</h1><h2>World</h2>";

let result = reg.exec(text);

// result[1] - first group
// result[2] - second group
// ..