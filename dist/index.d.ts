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
    readonly searchUsers: (start: number, page: number, location: string, language: string) => Promise<IMonkeyGitHubUser[]>;
    readonly searchRepositories: (start: number, page: number, language: string) => Promise<IMonkeyGitHubRepository[]>;
}
