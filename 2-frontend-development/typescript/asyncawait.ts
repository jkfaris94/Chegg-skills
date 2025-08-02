// Define an interface to describe the structure of the GitHub user data we're interested in
interface GitHubUser {
    login: string; // GitHub username
    name: string; // Full name of the user
    public_repos: number; // Number of public repositories
    followers: number; // Number of followers
    following: number; // Number of users this user is following
}

// Async function to fetch GitHub user information
async function fetchGitHubUserInfo(username: string): Promise<GitHubUser> {
    const apiURL = `https://api.github.com/users/${username}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status} ${response.statusText}`);
    }
    const userData: GitHubUser = await response.json();
    return userData;
}

fetchGitHubUserInfo("octocat")
  .then((userData) => console.log(userData))
  .catch((error) => console.error(error));