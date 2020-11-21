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

// ----------------------------------------------------------
const regex = /[A-Z]/g;
const s = "OsCaR";
let result: RegExpExecArray;
while ((result = regex.exec(s)) != null) {
  console.log(result[0]);
}

// O C R