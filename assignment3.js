/*/Write a function areEvenNumbers that iterates from 1 -100 and prints an array containing only the even numbers./*/
function areEvenNumbers() {
    var evenNumbers = [];
    
    for (var i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        evenNumbers[evenNumbers.length] = i;
      }
    }
    return evenNumbers;
  }
  console.log(areEvenNumbers());

  /*/A list a numbers 1 - 10 is given, write a function that prints the reverse of that that list/*/
  function reverseList() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var reversed = numbers.reverse();
    console.log(reversed);
  }
  
  reverseList();


/*/A word is given write a function to tell if the word is a Palindrome/*/
function isPalindrome(word) {
    var reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
  var inputWord = 'RACECAR';
  console.log('Is', inputWord, 'a palindrome?', isPalindrome(inputWord));

  /*/Two numbers are given write a function that prints the gratest common divisor of those numbers./*/
  function findGCD(num1, num2) {
    if (num2 === 0) {
      return num1;
    }
    return findGCD(num2, num1 % num2);
  }
  var number1 = 36;
  var number2 = 48;
  console.log('GCD of', number1, 'and', number2, 'is', findGCD(number1, number2));
  

  

  