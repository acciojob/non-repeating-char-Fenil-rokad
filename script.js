function firstNonRepeatedChar(str) {
  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find first non-repeating character
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // Return actual null, not "null" string
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
