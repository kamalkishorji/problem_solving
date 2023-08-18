// const fs = require('fs');

// var a = ['foo.txt', 'bar.txt'];
// var fullText = '';

// a.forEach((filename) => {
// fs.readFile(filename, 'utf8', (err, text) => {
// fullText += text;
// });
// });
// console.log(fullText);

// var events = require('events'),
// myEventEmitter = new events.EventEmitter();
// var testEmit = function testEmit() {
// console.log('emitted');
// };
// myEventEmitter.on('testOne', testEmit);
// myEventEmitter.emit('testOne');

//Examine the following code.

// function MyClass(x) {
// this.value = x;
// return this;
// }

// var foo = new MyClass(100);
// var bar = MyClass(100);

// console.log(foo.value,"foo==========");
// console.log(bar.value, "bar==============")
//What is the difference between the two calls to MyClass()?


setImmediate(function () {
  console.log('One');
  });
  process.nextTick(function () {
  console.log('Dot');
  });
  console.log('Com');
