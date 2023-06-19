# URL Shortener

This is a solution to a [Pair Programming Challenge by HiCounselor](https://www.linkedin.com/events/realworldliveprojectforsoftware7051545047413964800/comments/) on [LinkedIn](https://www.linkedin.com/).

## Table of contents

- [URL Shortener](#url-shortener)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
  - [Running Locally](#running-locally)
  - [My process](#my-process)
    - [Built with](#built-with)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Visit the home page of the site
- Paste any kind of link and have it shortened
- Click shortened link and have them be automatically redirected to the original link

**_This is a very minimal project thus UI of this project was not priority_**

## Running Locally

To run this project locally, you need first clone to local:

```bash
# clone command
git clone https://github.com/Di-void/hi-counselor-url-shortener.git url-shortener-demo
# enter working directory
cd url-shortener-demo
# install deps
npm install
```

After installing necessary dependencies, you will need set up your MySQL db instance. For simplicity, the project uses a local instance via [Xampp](https://www.apachefriends.org/). All you need to do after getting your local MySQL environment ready is to create a database called `db_example`.

The database should then have a table called `url_maps` with three columns namely: _id_, _url_ and _short_url_. **You're all set!**

Spin up the local dev server by running the following command:

```bash
npm start
```

Your app should be running on [localhost:5000](localhost:5000)

## My process

### Built with

- [NodeJS](https://nodejs.org/en) and [Express](https://expressjs.com/)
- [Consolidate](https://www.npmjs.com/package/consolidate)
- MySQL for database (local instance)
- [mysql package](https://www.npmjs.com/package/mysql)

## Author

- Github - [This is my Github account ^\_^](https://github.com/Di-void)
- LinkedIn - [Don Akhirebhulu](https://www.linkedin.com/in/don-akhirebhulu-675082242/)
