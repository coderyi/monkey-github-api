
# monkey-github-api

GitHub API for TypeScript

[monkeyweb](https://github.com/coderyi/monkeyweb) used it

## Install with `npm`

```ts
$ npm i monkey-github-api
```

## Examples

```ts
const client = new MonkeyGitHubAPI();
let list: IMonkeyGitHubRepository[] = await client.searchRepositories(1, 'TypeScript')
```

# License

MIT