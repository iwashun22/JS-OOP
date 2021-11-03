
////  Factory Function  ////
// function createCircle(radius, x = 1, y = 1) {
//    return {
//       radius,
//       position: {
//          x,
//          y
//       },
//       draw: () => {
//          console.log('draw');
//       }
//    }
// }

// const circle = createCircle(12);
// circle.draw();
// ################### //


////  Constructor Function ////
// function Circle(radius, x = 1, y = 1){
//    this.radius = radius;
//    this.position = {
//       x,
//       y
//    }
//    this.draw = () => {
//       console.log('draw');
//    }
// }

// require 'new', if you didn't type 'new', it will defind 'this' as 'window' object.
// const circle1 = new Circle(4);
// circle1.draw();
// ################### //





// These variables are just copying but never be same
// let x = 10;
// let y = x;

// x++;

// console.log(x); // expected output: 11
// console.log(y); // expected output: 10


// let a = 10;

// function increase(number){
//    number++;
// } 

// increase(a);
// console.log(a); // expectes output: 10

// // You need to use `return` to reasign the value
// function increase1(number){
//    return number++;
// }
// a = increase1(a);



// These variables are stored in somewhere else, it's not copying but will store a data in same place
// let x = { value: 10 };
// let y = x;

// x.value++;

// console.log(x); // expected output: { value: 11 }
// console.log(y); // expected output: { value: 11 }


// let a = { value: 10 };

// function increase(obj){
//    obj.value++;
// }

// increase(a);
// console.log(a); // expected output: { value: 11 }




// let obj = {
//    text: "Hello",
//    id: 19328412
// }

// Two ways to access them
// obj.text = 'Hello world'; 
// obj['text'] = 'Hello world';

// delete obj.id; // delete the 'id' property in obj
// console.log(obj); // expected output: { text: 'Hello world' } 

// Access using for loop
// const user = {
//    token: 'asdnvipsnpabsdia',
//    email: 'example@gmail.com',
//    status: 1,
//    connect: () => {
//       console.log('Connecting to a server');
//    }
// }

// for(const key in user) { 
//    // console.log(`${key}: ${user.key}`); // this will return undefined because the value 'key' is a string
//    if(typeof user[key] !== 'function')
//       console.log(`${key}: ${user[key]}`);
// }


// Using in if-else statement
// const circle = {
//    radius: 3,
//    draw: () => {
//       console.log('draw');
//    }
// }

// if('radius' in circle)
//    console.log('Circle has a radius'); // This code will get execute
// else
//    console.log('This is not a circle');



// function Circle(radius) {
//    this.radius = radius;

//    // this is now a private property
//    let position = {
//       x: 1,
//       y: 1
//    }
   
//    // view-only for the position property
//    this.getPosition = () => {
//       return position;
//    }

//    this.draw = () => {
//       movePosition(10, 10);
//       console.log('draw');
//    }

//    // You don't want this function to access from outside, because it's already called on draw() function
//    function movePosition(x, y) {  //  instead of  this.moveposition = () => {}
//       position.x = x;
//       position.y = y;
//       console.log(position);
//    }
//    // If you don't use 'this' it will make it private
// }

// const circle = new Circle(12);
// circle.draw();
// const ps = circle.getPosition();
// console.log(ps);


function Circle(radius = 0) {
   this.radius = radius;

   let position = {
      x: 1,
      y: 1
   }

   this.draw = function() {
      console.log('draw');
   }

   // You can set the setters and getter of the property 
   Object.defineProperty(this, 'position', {
      get: function() {
         return position;
      },
      set: function(obj) {
         if(!isNaN(obj.x) && !isNaN(obj.y)){
            position = obj;
         }
      }
   })
}

const circle = new Circle(7);
console.log(circle.position);

circle.position = {x: 2, y: 5};
console.log(circle.position);
