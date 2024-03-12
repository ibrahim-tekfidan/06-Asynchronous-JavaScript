console.log('before');
// Question.
// getUser(1); // How can we get user object ({ id: id, gitHubUsername: 'ibrahim' }) from getUser function? We can not get user object directly from database because reading object from database take some times. There are 3 patterns to deal with async code  1- Callbacks 2- Promises 3- async/await
// First we are going to look at callback and how we can use them to get the result of an async operations.
console.log('after');

function getUser(id) {
  setTimeout(() => {
    console.log({ id: id, gitHubUsername: 'ibrahim' });
  }, 2000);
}
