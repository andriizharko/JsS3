export class Repository {
    constructor(name, desc, url, rating) {
        this.name = name;
        this.desc = desc;
        this.url = url;
        this.rating = rating;
    }

    // Function to validate GitHub URL
    isValidGithubLink() {
        const githubUrlRegex = /^https:\/\/github.com\//;
        return githubUrlRegex.test(this.url);
    }
}