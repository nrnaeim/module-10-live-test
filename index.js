//Question 1 answer
function findSmallest(array) {
  return array.sort((a, b) => a - b)[0];
}
console.log("Smallest number:", findSmallest([4, 2, 8, 1, 9]));

//Question 2 answer
function getUniqueCharacters(str) {
  const tempObj = {};
  for (let i = 0; i < str.length; i++) {
    tempObj[str[i]] = str[i];
  }
  return Object.keys(tempObj).join("");
}
console.log("Unique Characters:", getUniqueCharacters("heeeeelllloohho"));

//Question 3 answer
function getMiddleCharacter(str) {
  const midIndex = Math.floor(str.length / 2);
  if (str.length % 2 !== 0) return str[midIndex];
  return `${str[midIndex - 1]}${str[midIndex]}`;
}
console.log("Middle Character(s)", getMiddleCharacter("book"));
