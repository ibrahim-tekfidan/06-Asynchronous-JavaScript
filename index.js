console.log('before');
// How to use a callback to get the user object
getUser(1, user => {
  console.log(user);
  // Get the repos
  getRepositories(user.gitHubUsername, repos => {
    console.log(repos);
  });
});
console.log('after');

// callback is a function that we are going to call, when result of an async operation is ready
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from database...');
    callback({ id: id, gitHubUsername: 'ibrahim' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log(`Reading Repositioes from ${username} gitHub account:`);
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
