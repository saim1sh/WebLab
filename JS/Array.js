const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];


// Concatenating two arrays
const merged = [...arr1, ...arr2];
console.log(merged); // Output: [1, 2, 3, 4, 5, 6]


//filter method to unique values in an array
const numbers = [1, 2, 3, 4, 5, 2, 3];
const uniqueNumbers = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]


//separate even and odd numbers
const mixedNumbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
const oddNumbers = mixedNumbers.filter(num => num % 2 !== 0);

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(oddNumbers);  // Output: [1, 3, 5]

