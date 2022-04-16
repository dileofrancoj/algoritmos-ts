// sugus
// split ["s","u","g","u","s"]
// reverse:  ["s","u","g","u","s"]
// "sugus" === "sugus"
const palindrome = (str: string) => {
  return !!(str.split("").reverse().join("") === str);
};

// O(n)
const recursivePalindrome = (str: string): boolean => {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) { // O(1)
    recursivePalindrome(str.slice(1, -1));
  }
  return false;
};
