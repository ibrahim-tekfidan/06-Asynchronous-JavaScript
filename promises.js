// Promise is an object that holds eventual result of an async operation
// So when an async operation complete, it can either result in a value or an error.
// A promise is basically promises you that it will give you the result of an async operation
// This object can be one of the three state. Initially when we create a promise object, it will be in the pending state. At this point it will kick off some async operation. When the result is ready, promise either be fullfilled or resolve which basically means async operation completed successfully. So here we going to have a value. Otherwise if something went wrong during the execuition of that async operation, out promise will be in the rejected state. In this case we going to have an error.
// Promise constructor function takes an argument. This argument is a function with to parameters. In this function we're going to kick off some async work( You may access a database or call a webserver etc.)
// Eventually when that async work complete, whe should either have a value or an error. If there is a value we wanna return this to the consumers of this promise. So somewhere in the code we are going to comsume this promise. Because this promise object promises us, it is going to have a result of an async operation. So we need to send this result to the consumer of this promise. The way we do that by using the resolve or reject parameters.
// Basically these two parameters(resolve, reject) are functions. So we can call resolve and passes value inside the function (resolve({id:1, name: 'ibrahim'})). And we are using resolve to send this value to the consumers of this promise object.
// Alternatively if something goes wrong, we wanna return an error to the consumet of this promise.

// 2 CASE
// 1- Let's imagine our async operation complete successfully and it will produce 1 as the result.

// Anywhere we have an async function that takes a callback, you should modify that function to return promise object.

const p = new Promise((resolve, reject) => {
  // Kick off some async work
  console.log('Reading user from database...');
  setTimeout(() => {
    // resolve({ id: 1, name: 'ibrahim' });
    reject(new Error('Cannot access database...'));
  }, 2000);
});

p.then(result => console.log(result)).catch(err => console.log(err.message));
