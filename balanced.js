const prompt = require("prompt-sync")({ sigint: true });

function getBalancedSubstrings(S) {
  if (/[A-Z]/.test(S)) {
    console.log(
      "Given string contains uppercase letter. Please enter only lowercase letters"
    );
    return;
  } else if (S.length > 100000) {
    console.log("Given string length is greater than 100000");
    return;
  }

  const n = S.length;
  let result = [];

  // Loop through all possible substrings
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sub = S.substring(i, j + 1);
      let counts = {};

      // Count the number of occurrences of each character in the substring
      for (let k = 0; k < sub.length; k++) {
        let c = sub.charAt(k);
        counts[c] = counts[c] ? counts[c] + 1 : 1;
      }

      // Check if the substring is balanced
      if (
        Object.keys(counts).length === 2 &&
        Object.values(counts)[0] === Object.values(counts)[1]
      ) {
        result.push(sub);
      }
    }
  }

  return result
    .sort((a, b) => b.length - a.length)
    .filter((sub, index, arr) => sub.length === arr[0].length);
}

console.log("Press ctrl + c to exit the program");

while (true) {
  const str = prompt("Enter a string ");
  console.log(
    `Balanced substring in ${str} is ${getBalancedSubstrings(str)}\n\n`
  );
}
