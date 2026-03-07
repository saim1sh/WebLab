const info ={
      name: "Saim",
      age: 22,
      city: "Karachi",
      function(){
         console.log("Hello World");
      },
      sum : function(a, b){
         return a + b;
      }

}

// Accessing object properties
console.log(info.name);
console.log(info.sum(5,6))


//nested object
const person = {
   name: "Saim",
   age: 22,
   address: {
      city: "Karachi",
      country: "Pakistan",
      home :{
         city: "Karachi",
         country: "Pakistan"
      }
   }
}

const {name, address:{home:{country}}} = person;