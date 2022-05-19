# URL Shortener API

## Table of Contents

* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Status](#status)

<br>

## General Info

[DIO](https://www.dio.me/) Node course challenge to create a URL shortener REST API.

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
* You must create this file: src/config/Constants.ts (sorry, but I can't share my password :) )

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

TO DO
