"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Async function to fetch GitHub user information
function fetchGitHubUserInfo(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiURL = `https://api.github.com/users/${username}`;
        const response = yield fetch(apiURL);
        if (!response.ok) {
            throw new Error(`Failed to fetch user data: ${response.status} ${response.statusText}`);
        }
        const userData = yield response.json();
        return userData;
    });
}
fetchGitHubUserInfo("octocat")
    .then((userData) => console.log(userData))
    .catch((error) => console.error(error));
