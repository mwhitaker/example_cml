const Github = require('./classes');

const get_driver = (opts) => {
    const { repo, token } = opts
    return new Github({ repo, token})
}

const opt = {
    repo: "https://github.com/mwhitaker/personal_scraper",
    // repo: "mwhitaker/personal_scraper",
    token: "ABC"
}

const obj = get_driver(opt).stuff().then(res => console.log(res))
