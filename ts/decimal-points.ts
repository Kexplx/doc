const n = 2010020;
const nReverted = revert(n.toString());

let result = '';
for (let i = 0; i < nReverted.length; i += 3) {
    console.log(i)
    result += nReverted.slice(i, i + 3) + '.'
}

function revert(s: string) {
    let reverted = '';

    for(let i = s.length - 1; i >= 0; i--) {
        reverted += s[i]
    }

    return reverted;
}