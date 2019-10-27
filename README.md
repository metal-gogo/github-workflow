# github-workflow <!-- omit in toc -->

> Small demo consuming Github API with NuxtJS.

In this document you will find a brief documentation on how to run the app, as well a list of development and design desicions I'll take through the creation of this Demo.

- [Instructions for the demo](#instructions-for-the-demo)
  - [Bonus](#bonus)
  - [Additional info](#additional-info)
  - [General guidelines](#general-guidelines)
- [Build Setup](#build-setup)
- [Decisions made](#decisions-made)

## Instructions for  the demo

I'm going to timebox myself for this demo. I'll be giving myself a 5 hours timebox. This demo consists on the following:

* Create a simple workflow that guides user through a checkout process and collects data.
* The workflow should contain 3 steps:
  1. Introduction slide, ready only.
  2. Simple form that collects user first name, last name and github username (all fields are required).
  3. Simple form that collects user email and has a "Agree with terms and services" checkbox (both required).
* After the user does all 3 steps, query github user api, with github username that was collected and display collected data with the user github avatar image.
* Each step/slide should have "back" and "next" button.
* Next button should be disabled if input on the current step is invalid.
* Form should handle errors and basic validations.
* Animate workflow transitions.

### Bonus

* The workflow can also be browsed using the native browser back / next button

### Additional info

* API endpoints needed - users (https://developer.github.com/v3/users/#get-a-single-user).
  *example: (https://api.github.com/users/angular)
* Feel free to use any other open API, that could make the assignment better/easier
Bonus
* The workflow can also be browsed using the native browser back / next button

### General guidelines

* Please use VueJS (and needed ecosystem) to build the task.
* The code should be readable and clearly commented when needed.
* The project should be pushed to a public github repository.
* You can use all the open source libraries you need, but keep it sane 🤓.
* README.md should contain project documentation (how to run and build the project locally from scratch, project structure, gotchas,... anything worth mentioning).
* The project should support IE11+ and all modern browsers (current version - 1).
* The UI should be responsive.
* HTML should be semantic.

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Decisions made

1. I decided to use [Nuxt.js](https://nuxtjs.org) for this project. It is an awesome framework that works over [Vue.js](https://vuejs.org/), and I believe that its a great choice for the following reasons:
  * It has great performance.
  * It has Server Side Rendering out of the box.
  * The site can be statically generated, so it can live anywhere.
2. My first task is to make sure that my development experience is awesome. Therefore, I'm making sure the following tools are working correctly:
  * [ESLint](https://eslint.org/).- A pluggable linting utility for JavaScript.
  * [Prettier](https://prettier.io/).- An opinionated code formatter to help me follow my ESLint rules.
3. I love emojis, so I'm following this [commit messages convention](https://github.com/dannyfritz/commit-message-emoji) for my commits.
