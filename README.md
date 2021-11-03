# JS-OOP

### creating Object

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

### Value and Reference Types

Type | -
-----|-----
Value | `number`, `string`, `boolean`, `undefined`, `null`
Reference | `Object`, `Function`, `Array`
