---
title: "Create Minimalistic REST API using Node.js and Express"
date: "July 11 2021"
excerpt: "Nowadays, the word **API** becomes more and more popular as we live in the era of the Information Age. Doesn't matter if you are a coder or not, probably you have heard the word **API** at least a couple of times. Especially if you are a coder, APIs are all around code in many different forms, therefore it's good to know something about them. Indeed there are many different types of APIs, and the word API stands for _application programming interface_, while REST means _representational state transfer_, and this type of API will be the main focus of this article."
cover_image: "/assets/posts/rest_api.png"
---

## What is REST API?

<br>

Nowadays, the word **API** becomes more and more popular as we live in the era of the Information Age. Doesn't matter if you are a coder or not, probably you have heard the word **API** at least a couple of times. Especially if you are a coder, APIs are all around code in many different forms, therefore it's good to know something about them. Indeed there are many different types of APIs, and the word API stands for _application programming interface_, while REST means _representational state transfer_, and this type of API will be the main focus of this article. Don't worry if those words do not mean too much to you at this point. So what are APIs and what do we need them for? Think of APIs as microprograms or microservices, which are a kind of bridge that connects two abstract lands. Sometimes they may live on the external server, and work as a separate program. **REST API** is the best example in this case, as it is generally hosted on a separate server and serve our app on the frontend side. For instance, let's say that we have an application that manages doctors appointments, we can create the whole visual part of the ap on the front part, but what about the database and the whole logic related to communication with the database, registering users, authenticating them, and so on? In this case, we will need REST API which will take care of all of the logic related to storing data, accessing given routes, as well as security issues. Before we move on to building the REST API itself, there is one more question. How does the frontend app communicate with the backend (in this case REST API)? Just like we humans have different languages, and English is our "lingua franca", web applications have their own "international" language as well.

<br>

In order to understand it, there are few core concepts:

<br>

- [API endpoints](https://stackoverflow.com/questions/2122604/what-is-an-endpoint)
- [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [HTTP response codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) **Optional**
- [Body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages) **Optional**

<br>

I will not go over the details, but I recommend you to go over the definitions on MDN. To sum up, we can say that we can communicate with REST API via **API Endpoints** which are just links with specific endings, therefore word "endpoint", plus we also have to specify _request method_ and as a result, we get some data with _response code_ from the server. Additionally, some extra details such as cookies, or authorization details can be added in **headers**, while longer messages are generally put in the **body** part of the request. Moreover, since these ways of communication are always more or less the same, there is no need to worry about what specific technology was used on the frontend or backend side. That is why we can see frontend applications written in JavaScript, while backend servers run very often on different languages such as C#, PHP or Java. However, since the invention of Node.js, we can now also use JavaScript on the backend side.

<br>

## Node.js and Express

<br>

After the short theoretical introduction to what are APIs and how do web applications work, now it's time to dig a little bit deeper. In this article we will use only JavaScript to build REST API, therefore it's good to know a few things about it beforehand. **Node.js** is a program written in C++ that runs the V8 engine of JS (the same that runs inside of Google Chrome web browser), and thanks to this invention we can run JavaScript applications outside of the browser. In other words, normally we have to attach JS scripts to HTML files, which are parsed later by web browsers. However, thanks to Node.js, it is possible to write JavaScript pretty much anywhere, and run it with the help of Node.js. There are of course a few differences between the browser environment and Node.js environments, such as the lack of DOM or window object, but from the other side, we get access to the local files, and more complex operations just like with any other programming languages.

<br>

## Express

<br>

It is very easy to guess that thanks to the power of Node.js we can do a lot of things with JavaScript, but things can grow very complex and get out of hand very quickly. Just like on the frontend side, almost nobody is using vanilla JavaScript anymore, for the sake of **Not Repeating Ourselves**, the same thing applies to Node.js and backend practices. When on the frontend we use a lot of tools, frameworks, and libraries such as React, Vue, or Angular, also here there are similar tools. One of the most popular frameworks in terms of Node.js is Express. It is kind of a small library that helps us write less verbose code and makes things even easier. It's not opinionated and you can use it just like an additional library. In this article, we will use both Node.js with Express framework to make the code as much readable as possible.

<br>

## Hello API World

<br>

Let's finally move on to the coding part, but beofore starting we will need a few tools:

<br>

- [Node.js](https://nodejs.org)
- Code Editor (for example: [VS CODE](https://code.visualstudio.com/))
- web browser
- [Postman](https://www.postman.com/) **Optional**

<br>

First of all, download and install Node.js (there may be some differences depending on what OS you use). Anything over 12 should be OK with this tutorial. Once you have Node.js installed on your computer, you can check if everything is OK by going to the terminal and typing `node -v`.

<br>

The next step is to create a folder and initiate a configuration file called (package.json). If you use Linux or macOS, then you can use these commands:

<br>

1. `mkdir restapi`
2. `cd restapi`
3. `npm init -y`
4. `touch app.js`

<br>

The commands may differ depending on the system, but the idea is to create a new folder called "restapi", open that folder and initiate an entry file to our project called "package.json" with the flag `-y` which simply means answers "yes" to all of the questions. If you skip this flag, then you will have to answer them manually. In the last part, we create the file `app.js` where our API's code will live.

<br>

After creating the folder, and necessary files open the code editor and go to the given folder. The first modification will be to add one line to the `package.json` file, which will let us use ES6 way of importing modules

<br>

```
 // "commonjs" style

const express = require("express");

// ES6 style
import express from "express";

```

<br>

To enable this option, open `package.json` file and under `"description"` add the following line

`"type": "module",`

Additionally, you can also add the following line

`"start": "node app"`

inside of the `"scripts"` block. This will let you use `npm start` command just like you have probably used before with React for example, otherwise you would have to type `node app` each time in the terminal to execute `app.js` file with Node.js. There is one more detail - Express. Go to the terminal, make sure that your terminal is opened inside of the project folder and type in the following command

`npm i express` - this command means use the npm package manager, and `i` install the package called `express`.

_Before we had to write `install` instead of `i` and also add the flag `--save` to add the module to the package.json file._

<br>

Now inside of "app.js" file:

1. Import Express framework

`import express from "express";`

2. Initiate express inside of variable called app

`const app = express();`

3. Add one route "/", and only one method "GET".

<br>

```

app.get("/", (req, res) => {
  res.send("hello world");
});

```

<br>

First of all inside of the app object, we have method `.get` which takes 2 parameters

<br>

- "/" string which is the route on which will it listen,
- (req, res) callback function with two parameters `req - request` and `res - result`. Since we do not care much about the request at this point, just hitting the endpoint with the "GET" method, we will only send back string "hello world" back to the sender.

4. It's time to start our server and set it to listen on a given port.

<br>

`app.listen(5000);`

<br>

Method listens, starts our server, and its first parameter is the value of the port that our app will listen on - in this case: 5000, but feel free to change it to the other values.

<br>

The overall code should look like that:

<br>

```

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000);

```

<br>

Now you can type in `npm start` or `node app` in the terminal, open your web browser and go to the [http://localhost:5000](http://localhost:5000). On that address "hello world" text should be visible.

<br>

You can also do the same with Postman, by sending GET request to that address

_To terminate the server, hit `CTRL + C`_

<br>

That's all! Congratulations! :) Our first very simple REST API is ready. But in real life, it is not enough as there are many other things to learn and improve.

<br>

## Refactoring

<br>

It is almost finished, we won't any extra functionality to this app. Before finishing let's refactor our code a little bit more and introduce some very simple design patterns.

<br>

### Middleware

<br>

Middleware, like the name can suggest is some kind of software or let's call it method that runs in the middle of our requests and responses. There are many middlewares that you may want to end up adding to your app, but for now, we will need some absolute basics.

<br>

Right after `const app = express();` add following code:

<br>

```
app.use(express.json());
app.use(express.urlencoded());

```

<br>

Method `.use` is generally used to add middlewares for the connections made with the express, in this case, we have `.json()` and `.urlencoded`. These two middlewares will parse JSON files and convert request input, to readable strings and numbers.

<br>

### process.env

<br>

Since the backend side is always much more vulnerable to hacker attacks, as it may store very sensitive information such as passwords to the databases etc. It's better to take some precautions and never share those kinds of values in the public repositories. That is why we use environmental config files, such as `.env`. Let's store our port value inside of such an environmental file.

<br>

First of all, we will need to download the npm package for this purpose use

<br>

`npm i dotenv',

then import it with

`import dotenv from "dotenv";`

and set it up with the following line `dotenv.config();`. Now you can create a new file called `.env` inside of the same folder. Inside of the `.env` file add the following line `PORT=5000`. Then go back to the `app.js` file, create a variable called port and assign it to the value from the `.env` file like that `const port = process.env.PORT;` Now you can modify the last line of the code to

`app.listen(port);`

This will enable us to change port values dynamically, depending on the given server. You can also add a callback as a second parameter.

<br>

```
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
```

<br>

## Express Router

<br>

REST API can grow very big and complex, so it is better to keep the routes outside of the main file. Let's create a separate folder for the given routes, and add a file called "mainRouter.js". Inside of this file, we will use again Express, but this time it's the Router method that helps to reroute between different paths easily.

<br>

```
import express from "express";
import MainController from "../controllers/MainController.js";
const mainRouter = express.Router();

const mainController = new MainController();

mainRouter.get("/", mainController.HelloWorld);

export default mainRouter;

```

<br>

## Controller

<br>

Most of the code should be clear by now, but you may be wondering what is "MainController"? The more routes we have in our app, the more logic to handle each route we have, so let's go a bit further and divide this part as well. In the main folder, create a folder called "controllers" and there create a new file called "MainController.js". Inside of this file, create class with a public method.

<br>

```
class MainController {
  HelloWorld(req, res) {
    return res.send("Hello World");
  }
}
export default MainController;
```

<br>

Almost there! Now we can also edit "app.js" file so everything should look like that:

<br>

```
import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/mainRouter.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded());

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
```

<br>

You can try to run it once again, everything should work just like before.

<br>

## Conclusion

<br>

Congratulations if you made it that far! However, it is just a beginning and there are many more things to learn about Node.js and Express. The application is super simple, but hopefully, it gave you the initial idea of how to create REST APIs in Node.js. Stay tuned for more, as in my upcoming articles, we will add new features to this API.
