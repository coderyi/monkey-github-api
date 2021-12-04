export interface IMonkeyGitHubUser {
    title: string;
    avatar_url: string;
}
export interface IMonkeyGitHubRepository {
    title: string;
    avatar_url: string;
    description: string;
    created_at: string;
    stargazers_count: number;
    forks_count: number;
}
export declare class MonkeyGitHubAPI {
    readonly searchUsers: (page: number, location: string, language: string) => Promise<IMonkeyGitHubUser[]>;
    readonly searchRepositories: (page: number, language: string) => Promise<IMonkeyGitHubRepository[]>;
}
