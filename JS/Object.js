const info = {
  name: "Saim",
  age: 22,
  city: "Karachi",
  function() {
    console.log("Hello World");
  },
  sum: function (a, b) {
    return a + b;
  },
};

// Accessing object properties
console.log(info.name);
console.log(info.sum(5, 6));

//nested object
const person = {
  name: "Saim",
  age: 22,
  address: {
    city: "Karachi",
    country: "Pakistan",
    home: {
      city: "Karachi",
      country: "Pakistan",
    },
  },
};

const {
  name,
  address: {
    home: { country },
  },
} = person;

// console.log(name);
// console.log(country);

// console.log(Object.keys(person));
// console.log(Object.values(person));

// //print all keys and values of object
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// //print all keys and values of nested object
// for (let key in person.address) {
//   console.log(key + ": " + person.address[key]);
// }

function allKeys(obj) {
  Object.keys(obj).forEach((key) => {
    console.log(key);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      allKeys(obj[key]);
    }
  });
}

allKeys(person);


function flattenObject(obj, path = "", result = []) {

   for (let key in obj) {

      const value = obj[key]
      const newPath = path ? `${path}.${key}` : key

      result.push(newPath)

      if (typeof value === "object" && value !== null) {
         flattenObject(value, newPath, result)
      }
   }

   return result
}

console.log(flattenObject(person))