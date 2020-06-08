const map = new Map<number, string>();
// const map = new Map<number, string>(
//   [
//     [879, 'Oscar'],
//     [543, 'Tobi'],
//   ]
// );

map.set(289, 'Oscar');
map.get(289);             // value: string | undefined
map.has(289);             // boolean

map.delete(289);          // delete single key-value pair, boolean for status
map.clear();              // delete all key-value pairs
map.size;                 // number of key-value pairs

for (const kv of map) {
  kv[0];  // key
  kv[1];  // value
}