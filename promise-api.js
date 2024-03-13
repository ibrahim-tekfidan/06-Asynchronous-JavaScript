// Sometimes you wanna run a few async operations in parallel. And when they all complete, you wanna do something after. For example, you may call different API's like Facebook API and Twitter API and result of both these async operations are ready then you wanna return something to the client.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Calling Facebook API...');
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Calling Twitter API...');
    resolve(2);
  }, 2000);
});

// This method will return a new promise that would be resolve when the all the promises in this array are resolved.

Promise.all([p1, p2]).then(result => console.log(result));

// Here we don't have concurrency, we don't have multi-threading. We still dealing with one thread. But that single thread is kicking off multiple async operations almost at the same time. It is not exactly at same time. Almost at the same time. First it starts async  operation1 then the thread is released then immediately it starts second async operation. We are not waiting for the result of first async operation to be ready in order to kick off the second async operation.
// This is the situation we had our previous example where we got the user object then we got the repositories then we got the commits for the first repository. So each async operation started after the previous async operation completed. That was different in this implementation both these async operations are started almost at the same time. That's the first thing i want to clarify.
//  The second thing when we get the result, the result will be available as an array. So in this case, each promise is resolved with a value 1 and 2. So our result array have two values [1,2].
// What if one these promises fail? If any of our promises are rejected, final promise that is returned from Promise.all([p1,p2]) is considered rejected.
// One last thing before finish this lecture. Sometimes you wanna kick off multiple async operations. But you wanna do something as soon as one of these async operation completes. You don't wanna wait all of them complete. We just wanna do something as soon as the first operation completes. If that's the case instead of using promise.all, we use promise.race([p1,p2]). As soon as one promise in this array is full-filled, the promise that is returned from this race method is considered full-filled. In this case result we have is not an array, it is the value of the first full-filled promise.
