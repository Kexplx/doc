async function delay(ms) {
  return new Promise(res => setTimeout(() => res(), ms));
}

module.exports = { delay };
// await delay(500);