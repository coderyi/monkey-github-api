"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonkeyGitHubAPI = void 0;
class MonkeyGitHubAPI {
    constructor() {
        this.searchUsers = async (start, page, location, language) => {
            var list = [];
            let url = 'https://api.github.com/search/users?q=location:' + location + '+language:' + language + '&sort=followers&order=desc&page=' + page;
            if (location.length < 1) {
                url = 'https://api.github.com/search/users?q=language:' + language + '&sort=followers&order=desc&page=' + page;
            }
            const response = await fetch(url);
            const responseJson = await response.json();
            let i;
            for (i = 0; i < responseJson.items.length; i++) {
                var item = responseJson.items[i];
                let newItem = {
                    title: item.login,
                    avatar_url: item.avatar_url
                };
                list[i] = newItem;
            }
            return list;
        };
        this.searchRepositories = async (start, page, language) => {
            var list = [];
            const response = await fetch('https://api.github.com/search/repositories?sort=stars&order=desc&page=' + page + '&q=language:' + language);
            const responseJson = await response.json();
            let i;
            for (i = 0; i < responseJson.items.length; i++) {
                var item = responseJson.items[i];
                let newItem = {
                    title: item.full_name,
                    avatar_url: item.owner.avatar_url,
                    description: item.description,
                    created_at: item.created_at,
                    stargazers_count: item.stargazers_count,
                    forks_count: item.forks_count
                };
                list[i] = newItem;
            }
            return list;
        };
    }
}
exports.MonkeyGitHubAPI = MonkeyGitHubAPI;
//# sourceMappingURL=index.js.map