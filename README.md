# URL Shortener API

## Table of Contents

* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)

<br>

## General Info

A URL shortener REST API created using Nodejs, Typescript and MongoDB.

<br>	

## Technologies


<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width=30px/>
  Nodejs
</div>
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width=30px/>     
  Express
</div>
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width=30px/>             
  MongoDB
</div>
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" width=30px/>
  Typescript
</div>
<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width=30px/>
  Javascript
</div>

<br>

## Setup

* You need [nodejs](https://nodejs.org/) installed to run this project.
* You also need a cloud mongodb. You can get one for free [here](https://www.mongodb.com/).
* You must create this file: src/config/Constants.ts

```
export const config = {
  API_URL: 'http://localhost:5000',
  MONGO_CONNECTION: < Insert mongodb connection string here >
}
```

To start the typescript compiler in watch mode:
```
npm run build:watch: "tsc -w",
```

To start the server in watch mode:
```
npm run dev
```

<br>

## Status

You can post a JSON with an URL to be shortened:

<img src="./assets/post.jpg" alt="Imsomnia App posting a JSON with an URL and receiving a response with a shortened URL">

The URL and the hash is added to the database:

<img src="./assets/mongodb.jpg" alt="Database containing the URL and the hash">

If you try to access the shortened URL, the database is searched and you are redirected to the original URL:

<img src="./assets/get.jpg" alt="Imsomnia App using the GET method for the shortened URL and showing the original URL">
