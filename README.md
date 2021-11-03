# JS-OOP

### Creating Object

```js
////  Factory Function  ////
function createCircle(radius, x = 1, y = 1) {
   return {
      radius,
      position: {
         x,
         y
      },
      draw: () => {
         console.log('draw');
      }
   }
}

const circle = createCircle(12);
circle.draw();
// ################### //


////  Constructor Function ////
function Circle(radius, x = 1, y = 1){
   this.radius = radius;
   this.position = {
      x,
      y
   }
   this.draw = () => {
      console.log('draw');
   }
}

// require 'new', if you didn't type 'new', it will defind 'this' as 'window' object.
const circle1 = new Circle(4);
circle1.draw();
// ################### //
```

<hr/>

### Value and Reference Types

Type | - | -
-----|-----|-----
Primitive | `number`, `string`, `boolean`, `undefined`, `null` | are copied by their value
Objects | `Object`, `Function`, `Array` | are copied by their reference

> example code of Value type

```js
// These variables are just copying but never be same
let x = 10;
let y = x;

x++;

console.log(x); // expected output: 11
console.log(y); // expected output: 10


let a = 10;

function increase(number){
   number++;
} 

increase(a);
console.log(a); // expectes output: 10

// You need to use `return` to reasign the value
function increase1(number){
   return number++;
}
a = increase1(a);
```

<br>

> example code of Reference type

```js
// These variables are stored in somewhere else, it's not copying but will store a data in same place
let x = { value: 10 };
let y = x;

x.value++;

console.log(x); // expected output: { value: 11 }
console.log(y); // expected output: { value: 11 }


let a = { value: 10 };

function increase(obj){
   obj.value++;
}

increase(a);
console.log(a); // expected output: { value: 11 }
```