---
title: "Users Database with Login and Signup Functions from Scratch (Node.js, MongoDB)"
date: "July 12 2021"
excerpt: "Recently in one of my tutorials, you could read how to create a super simple REST API using Node.js and Express, and if you have missed that one you can find it here. But what is the purpose of having REST API without any database? In this tutorial, we will focus on adding MongoDB to REST API from the previous tutorial and build a simple user database with signup and login functions."
cover_image: "/assets/posts/node_mongo.png"
---

Recently in one of my tutorials, you could read how to create a super simple REST API using Node.js and Express, and if you have missed that one you can find it [here](https://dev.to/pawel/how-to-build-restful-api-using-node-js-3dpp). But what is the purpose of having REST API without any database? In this tutorial, we will focus on adding MongoDB to REST API from the previous tutorial and build a simple user database with signup and login functions.

<br>

One of the most traditional paths, in this case, would be to create an SQL type of database, configure a local server, and add some [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) layer for establishing communication between the API and database. Additionally, we should also learn at least the basic syntax of SQL and find a way to host our database on a public server. Fortunately, there is also an alternative way to stay within JavaScript "comfort zone" and minimize the configuration part. It's all thanks to NoSQL databases, and to be more precise MongoDB.

<br>

## Mongo - NoSQL DB

<br>

MongoDB is a NoSQL type of database, or in other words non-relational database. What does it mean? In traditional SQL based databases, we have tables, rows and columns, where every piece of data is strictly related to each other, and we need a specific query language (SQL) to manipulate data inside of them. NoSQL, databases are more or less like [JSON](https://www.json.org/json-en.html) documents, which do not have to be related to each other or structured in a similar way. Moreover, if you are familiar with JavaScript objects, then reading and saving documents to MongoDB is almost the same as creating objects in plain JavaScript.

<br>

## Mongoose

<br>

So in the previous part, it was said that SQL databases need ORM while there is no such a need for NoSQL databases, but it doesn't mean that we cannot implement similar logic inside of NoSQL databases. Thanks to the Mongoose library, it is possible to use a similar pattern to ORM, called ODM (Object Data Modelling). Mongoose helps us organize our data, and also comes with some ready functions for connecting with MongoDB. That is all you need to know for the time being.

<br>

## Setting up MongoDB account

<br>

1. Go to the official [MongoDB website](https://www.mongodb.com/)
2. Create a new account (free is fine)
3. Go to MongoDB Atlas Cloud
4. Create a new project
5. Once your project is ready click DATA STORAGE => Clusters => Build a Cluster
6. Pick the free option: "Shared Cluster"
   Now depending on your location, you can select the nearest server to your current location
   Optionally you can change the cluster name at the bottom in this case we will call it "REST"

![Shared Cluster](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2vmqpibm4eobopfs9z88.png)

7. Click on "Create Cluster" and wait approximately 5 mins while the cluster is being created.
8. Once it's ready click "Collections" and "Add My Own Data"

![add data](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ekaxcthgym8fuqg3k260.png)

9. Give a name to a new collection created inside of the cluster (DatabaseName: restapi, Collection Name: users)

![New collection](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bhfi5wnz8m11950cbrwj.png)

10. Go to Database Access and "Create new user"
11. Save the password and username in a safe place
12. Go to Network Access and click "Add IP Address" _normally you will want to give access to your database only from the backend's IP so that no one else can modify your DB, but in this case, we will whitelist all of the IP address to possible confusion_
13. Click "Allow access from anywhere"

![Allow access from anywhere](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vlh6v3jt064d0v41kjmx.png)

14. Go back to Clusters and leave your tab open

<br>

Now our MongoDB is ready, and we can focus on writing the code.

<br>

## Coding Time

<br>

It's finally time to go back to our Node.js app and open the code editor. Feel free to use the boilerplate code from the previous tutorial or just code along.

<br>

## Connecting MongoDB to Node.js Server

<br>

1. Open the folder of the project and install mongoose

`npm i mongoose`

2. Import Mongoose inside of the "app.js" file

`import mongoose from "mongoose";`

3. Create a connection with MongoDB via mongoose.connect method

<br>

```
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database connection established");
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`);
 });

```

<br>

As you may see, the first parameter of connect function is the address of our MongoDB database, which should be stored inside of the .env file for the security precautions

4. Inside of the .env file create a new variable called MONGO_URI

5. Go back to MongoDB tab and click on "Connect", select the second option called "Connect your application"

6. Then you should see connection link to your database, that looks more or less like that

```
"mongodb+srv://user:<password>@rest.cr5aa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```

7. Copy and paste this string inside of the .env file like that

```
MONGO_URI="mongodb+srv://admin:<password>@rest.cr4bo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
```

8. Change `<password>` part with your password, and `myFirstDatabase` with the collection name that we gave before in this case it was "restapi"

<br>

Now you can go to the terminal and type `npm start`, hopefully, everything went smoothly and you should see text in the console saying "Database connection established". Congratulations! If you can see it, we can start adding users to our database.

<br>

_In case you get an error: ERROR: Error: querySrv ESERVFAI, just wait a little bit a try again later_

<br>

## users Route

<br>

1. First of all let's create a new file in the folder "routes" called "usersRouter.js", and then import it inside of the "app.js" file.

`import usersRouter from "./routes/usersRouter.js";`

2. At the bottom of the file, before `app.listen` add the following line

`app.use("/users", usersRouter);`

That's all for the "app.js" file part, the rest of the logic will be transferred to the usersRouter file.

3. Inside of the usersRouter.js file import Express Router and export the module.

<br>

```
import express from "express";
const usersRouter = express.Router();

export default usersRouter;
```

<br>

As you can see we don't have any routes yet, and also as you may remember from the previous tutorial, each route will use the controller and other middlewares so that our app will go even further.

4. Inside of "controllers" folder create a new file called "UsersController.js" with an empty class

<br>

```
class UsersController {
}

export default UsersController;
```

<br>

5. Remember ODM? Before we start right our controller logic, we also have to create some kind of schema for the user profile. Inside of the main folder, create a new folder called "models" and inside of the models create a file called "user.model.js".

<br>

6. Open user.model.js file, and there we will create an example for our MongoDB, how a user document should look like.

<br>

```
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

const User = mongoose.model("user", userSchema);

export default User;

```

<br>

7. Now it's time to go back to the UsersController.js file and import the User schema `import User from "../models/user.model.js";`

8. At this point we can add a method for signing up the users. First of all, we create a new async method with request and result parameters. The method will firstly look for an existing user in our database, in case the username is already taken it will return and send back status "400". Otherwise, it will use User schema to create a new user based on the "body" input and save it in the database. As a result, we can see the details of our newly created user.

<br>

```
import User from "../models/user.model.js";

class UsersController {
  async signup(req, res) {
    try {
      let user = await User.findOne({
        username: req.body.username,
      });

      if (user) {
        return res.status(400).json({
          error: true,
          message: "Username is already in use",
        });
      }

      user = new User(req.body);

      await user.save();

      return res.status(201).send(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "Cannot Sign up",
      });
    }
  }
}

export default UsersController;
```

<br>

9. Go back to the usersRouter.js file,
   import and create a new instance of UsersController class, add a new "POST" route and add the given method from the controller.

<br>

```
import express from "express";
import UsersController from "../controllers/UsersController.js";
const usersRouter = express.Router();

const users = new UsersController();

usersRouter.post("/signup", users.signup);

export default usersRouter;
```

<br>

10. Start up the application with `npm start` and open [Postman](https://www.postman.com/)

11. Inside of the Postman, add new request, select method as POST, the address should be

````
http://localhost:5000/users/signup
```, click on the "Body" tab, select type "raw" and "JSON" then add the body for example:

<br>

````

{
"username": "John",
"password": "doe"
}

```

<br>

Click "Send" and you should see the newly created object right under the body input area.

<br>

![Postman result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gkur1esl5p266iqudiiq.png)

<br>

We are almost there! But as you can see there are huge security issues, as we can see each user's password, there is no validation etc.

<br>

## Bcrypt

<br>

Bcrypt is a popular library that helps us to hash different values, and also compare them later. In fact, there are two libraries called "Bcrypt" and "Bcryptjs" there are some slight differences between them. Probably Bcrypt will be a better option, but for the time being let's stick to the JavaScript version as it is easier to set up.

<br>

1. Install bcryptjs in your project
   `npm i bcryptjs`

2. Create new folder "helpers" in the "controllers" folder.

3. Create two files called "hashPassword.js" and "comparePasswords.js".

The names are kind of self-explanatory, indeed the functions themselves are not very complicated neither. The only tricky thing may be the `genSalt(10)` part, which specifies how much your input will be encrypted. The higher value in the first parameter, the more encrypted password will be. However, it may reflect on the overall performance so you can leave it at 10.

<br>

```

// hashPassword.js
import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
try {
const salt = await bcrypt.genSalt(10);
return await bcrypt.hash(password, salt);
} catch (error) {
throw new Error("Hashing failed", error);
}
};

export default hashPassword;

```

<br>

```

// comparePasswords.js

import bcrypt from "bcryptjs";

const comparePasswords = async (inputPassword, hashedPassword) => {
try {
return await bcrypt.compare(inputPassword, hashedPassword);
} catch (error) {
throw new Error("Comparison failed", error);
}
};

export default comparePasswords;

```

<br>

4. Import functions in the UsersController.js file

<br>

```

import hashPassword from "./helpers/hashPassword.js";

import comparePasswords from "./helpers/comparePasswords.js";

```

<br>

This time we will keep inital user's object in the "user" variable, then we will hash the password from the body, change it in the user object and in the end create new mongoose model and save it in the database.

<br>

```

user = req.body;

      const hashedPassword = await hashPassword(req.body.password);

      user.password = hashedPassword;

      const newUser = new User(user);

      await newUser.save();

```

<br>

That's all, you can try running the app again, and check the results this time.

![Encrypted Password](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wsbfhxipv5qacbvpo1vz.png)

<br>

## Login Function

<br>

Currently, we have only one route in the usersRouter.js file, let's add another one for the login purpose.

<br>

`usersRouter.post("/login", users.login);`

<br>

As we have the route, we also have to add a method that will compare the passwords and do something on hitting that API endpoint.

<br>

We will look for the user in the database and return the corresponding response. Then compare the password from the "body" request and the user's object. If everything is OK, our controller will return status 200 and a success message.

<br>

```

async login(req, res) {
try {
let user = await User.findOne({ username: req.body.username });

      if (!user) {
        return res.status(404).json({
          error: true,
          message: "Account not found",
        });
      }

      const isValid = await comparePasswords(req.body.password, user.password);

      if (!isValid) {
        return res.status(400).json({
          error: true,
          message: "Invalid password",
        });
      }

      return res.status(200).send({
        success: true,
        message: "User logged in successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "Couldn't login. Please try again.",
      });
    }

}

```

<br>

## Sanitizing Input

<br>

Hopefully one day our app will grow bigger, and we will have a lot of users. Popularity though is unfortunately also related to some risks. At some point, some malicious users, may try to modify our database, and since now we do not validate the input, let's add some extra middleware before adding the users to our database.

<br>

Create "middlewares" folder in the main directory, and in the middlewares, folder create a new file called "cleanBody.js".

<br>

Install "mongo-sanitize" package

<br>

`npm i mongo-sanitize`

cleanBody.js file should look like that:

<br>

```

import sanitize from "mongo-sanitize";

const cleanBody = (req, res, next) => {
try {
req.body = sanitize(req.body);
next();
} catch (error) {
console.log("clean-body-error", error);
return res.status(500).json({
error: true,
message: "Could not sanitize body",
});
}
};

export default cleanBody;

```

<br>

Import cleanBody middleware and add in between the route and controller parameters.

<br>

```

import express from "express";
import UsersController from "../controllers/UsersController.js";
const usersRouter = express.Router();

import cleanBody from "../middlewares/cleanBody.js";

const users = new UsersController();

usersRouter.post("/signup", cleanBody, users.signup);

usersRouter.post("/login", cleanBody, users.login);

export default usersRouter;

```

<br>

Try again running the app, logging, registering etc. Everything should work just like before, but this time we added an extra security layer.

<br>

## Conclusion

<br>

Congratulations! It was quite a lot of work, and our REST API finally starts to look like a real REST API, plus deals with some real-world problems. However, there is a still long way to go and many improvements have to be added. Feel free to modify the code and add your own features. In the next article, we will move even further and add JWT token support.
```
