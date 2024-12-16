// Define an interface to describe the structure of the GitHub user data we're interested in
interface GitHubUser {
    login: string; // GitHub username
    name: string; // Full name of the user
    public_repos: number; // Number of public repositories
    followers: number; // Number of followers
    following: number; // Number of users this user is following
}