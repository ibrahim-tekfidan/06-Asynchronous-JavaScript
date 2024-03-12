// Callback HELL
/*
console.log('before');
getUser(1, user => {
  getRepositories(user.gitHubUsername, repos => {
    getCommits(repos[0], commits => {
      console.log(commits);
    });
  });
});
console.log('after');
*/

// Make async functions look like sync using named functions. First right like above then refactor it. If you don't understand how to convert from callback hell to named function version, you can check out video from Mosh Hamedani Node.js course. It is very simple and understandable.
console.log('before');
getUser(1, displayRepos);
console.log('after');

function displayRepos(user) {
  getRepositories(user.gitHubUsername, displayCommits);
}

function displayCommits(repos) {
  getCommits(repos[0], commits => {
    console.log(commits);
  });
}

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

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log(`Reading commits from ${repo}:`);
    callback(['commit1', 'commit2', 'commit3']);
  }, 2000);
}
