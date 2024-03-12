// In order to resolve this callback hell problem, we should modify our asyncs to return the promise object.
console.log('before');
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(commits))
  .catch(err => console.log(err.message));
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
