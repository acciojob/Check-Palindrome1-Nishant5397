// complete the given function

function palindrome(str){
      var input = document.getElementById("inputString").value;
      var output = document.getElementById("output");

      // Remove non-alphanumeric characters and convert to lowercase
      var cleanedString = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

      // Check if the reversed string is equal to the original string
      if (cleanedString === cleanedString.split('').reverse().join('')) {
        output.innerText = "The input is a palindrome.";
      } else {
        output.innerText = "The input is not a palindrome.";
      }
}
module.exports = palindrome
