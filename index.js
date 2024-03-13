// In order to resolve this callback hell problem, we should modify our asyncs to return the promise object.
console.log('before');

// Promise-based approach
// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log(commits))
//   .catch(err => console.log(err.message));

// Async and await approach
// Async and await helps you write async code like sync code.
// Any time calling a function that returns a promise you can await the result of that function. And then get the actual result just like calling a sync function.
// Whenever you use await operator in the function, you need to decorate that function with the async modifier.
// In our promise base approach we use catch method to get any errors. When using async and await we have this catch method. The way we get the errors is using try-catch block.

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log(error.message);
  }
}

displayCommits();

console.log('after');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from database...');
      resolve({ id: id, gitHubUsername: 'ibrahim' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Reading Repositioes from ${username} gitHub account:`);
      resolve(['repo1', 'repo2', 'repo3']);
      // reject(new Error('Could not get repositories.'));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Reading commits from ${repo}:`);
      resolve(['commit1', 'commit2', 'commit3']);
    }, 2000);
  });
}
