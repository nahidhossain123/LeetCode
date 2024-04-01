var lengthOfLastWord = function (s) {
  const array = s.split(" ");

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] != "") {
      return array[i].length;
    }
  }
};
console.log("Test Case 1:", lengthOfLastWord("Hello World"));
console.log("Test Case 2:", lengthOfLastWord("   fly me   to   the moon  "));
console.log("Test Case 3:", lengthOfLastWord("luffy is still joyboy"));
