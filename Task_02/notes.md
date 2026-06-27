# Advanced JavaScript Notes

## 1. Prototype Chain

Every JavaScript object has a prototype. When a property or method is not found on an object, JavaScript looks for it in the object's prototype. This process continues until the property is found or the end of the prototype chain is reached.

Example:

```js
const arr = [1, 2, 3];

arr.push(4);
```

The `push()` method is not defined directly on `arr`. JavaScript finds it in `Array.prototype`.

---

## 2. Destructuring

Destructuring allows extracting values from arrays or objects into variables.

Array Example:

```js
const numbers = [10, 20, 30];

const [first, second] = numbers;
```

Object Example:

```js
const user = {
    name: "Abdullah",
    age: 20
};

const { name, age } = user;
```

---

## 3. Spread Operator (...)

The spread operator expands arrays or objects.

Array Example:

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
```

Object Example:

```js
const user = {
    name: "Abdullah"
};

const updatedUser = {
    ...user,
    age: 20
};
```

---

## 4. Rest Operator (...)

The rest operator collects multiple values into a single array.

Example:

```js
function sum(...numbers) {
    return numbers;
}
```

---

## 5. Optional Chaining

Optional chaining prevents errors when accessing nested properties.

Without Optional Chaining:

```js
user.address.city
```

If `address` does not exist, JavaScript throws an error.

With Optional Chaining:

```js
user.address?.city
```

It safely returns `undefined`.

---

## 6. Iterators

An iterator returns one value at a time.

Example:

```js
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

Each call to `next()` returns an object containing `value` and `done`.

---

## 7. Generators

A generator is a special function that can pause and continue execution using the `yield` keyword.

Example:

```js
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
```

---

## 8. ES Modules

ES Modules use `import` and `export` to share code between files.

math.js

```js
export function add(a, b) {
    return a + b;
}
```

app.js

```js
import { add } from "./math.js";

console.log(add(5, 3));
```

---

## 9. CommonJS

CommonJS is mainly used in Node.js.

math.js

```js
function add(a, b) {
    return a + b;
}

module.exports = add;
```

app.js

```js
const add = require("./math");

console.log(add(5, 3));
```

Difference:

| ES Modules                                    | CommonJS                              |
| --------------------------------------------- | ------------------------------------- |
| Uses `import` and `export`                    | Uses `require()` and `module.exports` |
| Mostly used in browsers and modern JavaScript | Mostly used in Node.js                |
| Supports static imports                       | Imports happen during execution       |

---

## 10. Promises

A Promise represents the result of an asynchronous operation.

States:

* Pending
* Fulfilled
* Rejected

Methods:

* then()
* catch()
* finally()

Project:

Promise Based Coffee Order Simulator

---

## 11. Fetch API

The Fetch API is used to make HTTP requests.

Example:

```js
fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
```

Project:

Random User API

---

## 12. Object Oriented Programming (OOP)

OOP organizes code into classes and objects.

Important concepts:

* Class
* Object
* Constructor
* Methods
* this keyword
* new keyword

Example:

```js
class Book {
    constructor(title) {
        this.title = title;
    }
}

const book = new Book("Clean Code");
```

Project:

Library Management System

Features:

* Add Book
* Delete Book
* Find Book
* Issue Book
* Return Book

---

## Summary

During this task I practiced:

* Prototype Chain
* Destructuring
* Spread Operator
* Rest Operator
* Optional Chaining
* Iterators
* Generators
* ES Modules
* CommonJS
* Promises
* Fetch API
* Object Oriented Programming
* DOM Manipulation
* Event Handling
* Asynchronous JavaScript

I also built the following JavaScript projects:

1. Promise Based Coffee Order Simulator
2. Random User API
3. Library Management System
