console.log('before');
// How to use a callback to get the user object
getUser(1, user => {
  console.log(user);
});
console.log('after');

// callback is a function that we are going to call, when result of an async operation is ready
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    callback({ id: id, gitHubUsername: 'ibrahim' });
  }, 2000);
}
