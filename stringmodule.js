function toUpper(str) {
  return str.toUpperCase();
}

function toLower(str) {
  return str.toLowerCase();
}

function countWords(str) {
  return str.trim().split(/\s+/).length;
}

module.exports = { toUpper, toLower, countWords };
