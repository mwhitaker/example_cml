const url = require('url');
const { spawn } = require('child_process');
const { resolve } = require('path');
const fs = require('fs').promises;

process.env.GITHUB_REPOSITORY="mwhitaker/personal_scraper"

const owner_repo = (opts) => {
    let owner, repo;
    const { uri } = opts;
    const { GITHUB_REPOSITORY } = process.env;
    console.log(GITHUB_REPOSITORY)
  
    if (uri) {
      const { pathname } = new URL(uri);
      [owner, repo] = pathname.substr(1).split('/');
    } else if (GITHUB_REPOSITORY) {
      [owner, repo] = GITHUB_REPOSITORY.split('/');
    }
  
    return { owner, repo };
  };

class Github {
    constructor(opts = {}) {
        const { repo, token } = opts;

        if (!repo) throw new Error('repo not found');
        if (!token) throw new Error('token not found');

        this.repo = repo;
        this.token = token;
    }

    owner_repo(opts = {}) {
        const { uri = this.repo } = opts;
        return owner_repo({ uri });
    }
    async runner_token() {
        const { owner, repo } = owner_repo({ uri: this.repo })
        return {
            owner,
            repo
        }
    }
    async stuff(opts = {}) {
        return {
            ...owner_repo({ uri: this.repo}),
            miguel: "is good"
        }

    }
}

module.exports = Github