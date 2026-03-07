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