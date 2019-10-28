# github-workflow <!-- omit in toc -->

> Small demo consuming Github API with NuxtJS.

In this document you will find a brief documentation on how to run the app, as well a list of development and design desicions I'll take through the creation of this Demo.

- [Instructions for the demo](#instructions-for-the-demo)
  - [Bonus](#bonus)
  - [Additional info](#additional-info)
  - [General guidelines](#general-guidelines)
- [Build Setup](#build-setup)
- [Decisions made](#decisions-made)
- [Wrap-up](#wrap-up)

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

You can find a live demo [here](https://github-workflow.firebaseapp.com).

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
4. I tend to organize the styles of my projects with [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/), using [BEM](http://getbem.com/) naming conventions.
  * I'll keep the `settings`, `tools`, `generic`, `elements`, and `objects` layers on SCSS in the `assets` directory.
  * Meanwhile, I'll keep the `components` layer on the `pages`, and `components` directories.
  * I love working with [SCSS](https://sass-lang.com/documentation/syntax). It's an awesome CSS preprocessor, and it helps organizing the ITCSS.
  * In order to have the `mixins`, and `variables` available on the Vue files I'll use the [@nuxtjs/style-resources](https://github.com/nuxt-community/style-resources-module) plugin.
5. I based my CSS reboot on the one from [Bootstrap](https://getbootstrap.com/).
6. I picked `#5524bd` as my brand color. This doesn't have a lot of rationale. My daughter's name is Violet, so I love that color.
  * I used [Colormind](http://colormind.io/), an online tool, to generate a pallete from my brand color:
    * `$violet-heart: #5524bd;`
    * `$daisy-bush: #4c279b;`
    * `$chesnut-rose: #ce7266;`
    * `$earls-green: #c6bf36;`
    * `$sunflower: #e5ce35;`
  * I prefer to name colors regardless of their functionallity on the code, and I used a [color naming tool](http://chir.ag/projects/name-that-color/) for that.
7. I decided to use [Lato](https://fonts.google.com/specimen/Lato) font because it scales really well to different sizes, and works beautifully on both headings, and paragraphs.
8. I choosed to follow the [app shell pattern](https://developers.google.com/web/fundamentals/architecture/app-shell). This is based on my belief that every web application, specially new ones, should make the following considerations:
   * Be [mobile-first](https://developers.google.com/search/mobile-sites/mobile-first-indexing).
   * Be a [PWA](https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp).
9. I believe that convention over configuration tends to scale better, therefore all the components are created on a directory with an `index.vue` inside of it.
10. Components that are meant to be used only once start with the prefix `The`. For instance, `TheHeader`, and `TheFooter`.
11. I added a little logo I created to just to give a little personality to the application.
12. I decided to create a new directory on a root level. The directory name is `utils`, and its purpose is to have some JS functions around reusable and available through all the application.
13. I decided to push the CTAs to the bottom part of the screen for two reasons:
  * It is more accessible in mobile devices to have the primary actions near the bottom of the device.
  * Whenever there is a change of screen and the content moves, the CTAs will always remain on the same position. This is only true in this particular demo, because the content of every page is small.
14. I decided to use [Vuex](https://vuex.vuejs.org/) to handle the state of the application because this will make it really easy to navigate through the application without losing the data.
15. I added a simple and elegant fade-out/fade-in transition to navigate through pages. This was really simple leveraging NuxtJS super powers.
16. I used [Axios](https://github.com/axios/axios) to consume the Github API.
17. I decided to use [Firebase](https://firebase.google.com/) for hosting. It's super easy to use, and it provides a great hosting platform for static web applications.

## Wrap-up

So... My time for this demo is up. If I had more time I would do the following things next:

* Fix PWA module issues.
* Improve the validations on the forms.
* Improve the feedback of what could be wrong on the forms.
* Make sure that every information on the state is mantained and shown on every step.
