let reg = new RegExp(/h.* /g);
let text = "hello world";

let result = reg.exec(text);
console.log(result);

// result != null => match was found.
// result[0] - the matched string ("hello "")

// result == null => no match found.

// ----------------------------------------------------------

const regex = /Note (\d)/;
const result = regex.exec('Note 1');
// result[1] - first group
