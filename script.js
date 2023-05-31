// complete the given function

function palindrome(str){
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the reversed string is equal to the original string
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
