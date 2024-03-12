console.log('before');
// Because reading a user from database takes some times, we should not block the code. So we need to use async function. setTimout function is not blocking the code. This is simulating async function in javaScript.
// So when we run this program 'console.log('before')' is executed then we get to the second line. Second line function is scheduling a task to be perform in the future. It doesn't wait or block. Then we g t the third function then third function is executed. And 2 seconds later async setTimout function is executed. So reading a user from database don't block the program.
setTimeout(() => {
  console.log('Reading a user from database...');
}, 2000);
console.log('after');
