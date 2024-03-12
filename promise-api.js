// In this lecture we're going to explore the API of promise object in JavaScript.
// Sometimes we wanna create a promise that is already resolve. This is particularly useful when writing unit test. So we wanna simulate a senario where an async operation calling a webserver is complete successfully. In yout unit test, you wanna create a promise that is already resolved.
// In Promise class we have static method called resolve. And this will return promise object that is already resolve. We can optionally pass a value.
// Similarly sometimes we wanna create a promise that is already rejected. In this case instead of calling resolve method, we call rejected method inside of Promise class.

const p1 = Promise.resolve({ id: 1, name: 'ibrahim' });
p1.then(user => console.log(user));

const p2 = Promise.reject(new Error('Reason for rejection.. .'));
p2.catch(err => console.log(err.message));
