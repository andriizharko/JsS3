// Imports
import { $, cE, cT } from './dom.js';
import { Repository } from './repo.js';
import { isNumeric, isGreaterThanZero, isRequired, minLength } from './validate.js';

// Array to hold validation errors
let errors = [];

// Query the DOM
const form = $('.form');
const repoList = $('#repoList');
const errorList = $('#errorList');

// Functions
const clearErrors = () => {
    errors = [];
    errorList.innerHTML = '';
    errorList.classList.add('hide');
};

const displayErrors = () => {
    errors.forEach((error) => {
        const li = cE('li');
        cT(li, error);
        errorList.appendChild(li);
    });
    errorList.classList.remove('hide');
};

const addRepo = (repo) => {
    const nameDiv = cE('div');
    nameDiv.classList.add('mt-30');

    const descDiv = cE('div');
    const ratingDiv = cE('div');

    const a = cE('a');
    a.classList.add('repo');
    a.href = repo.url;
    a.target = '_blank';
    cT(a, repo.name);
    nameDiv.appendChild(a);

    cT(descDiv, repo.desc);

    for (let i = 0; i < repo.rating; i++) {
        const starIcon = cE('i');
        starIcon.classList.add('fa', 'fa-star', 'fa-regular');
        ratingDiv.appendChild(starIcon);
    }

    repoList.appendChild(nameDiv);
    repoList.appendChild(descDiv);
    repoList.appendChild(ratingDiv);
};

const isValidRepo = (repo) => {
    clearErrors();

    if (!repo.isValidGithubLink()) {
        errors.push('Invalid GitHub link.');
    }

    if (!isRequired(repo.name)) {
        errors.push('Name is required.');
    }

    if (!minLength(repo.desc, 10)) {
        errors.push('Description must be at least 10 characters.');
    }

    if (!isNumeric(repo.rating)) {
        errors.push('Rating must be a number.');
    } else {
        if (!isGreaterThanZero(repo.rating)) {
            errors.push('Rating must be greater than zero.');
        }
        if (repo.rating > 5) {
            errors.push('Rating cannot be greater than 5.');
        }
    }

    return errors.length === 0;
};

// Event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // clearErrors();

    const name = $('[name="name"]').value;
    const desc = $('[name="desc"]').value;
    const url = $('[name="url"]').value;
    const rating = parseInt($('[name="rating"]').value);

    const newRepo = new Repository(name, desc, url, rating);

    if (isValidRepo(newRepo)) {
        addRepo(newRepo);
        form.reset();
    } else {
        displayErrors();
    }
});
