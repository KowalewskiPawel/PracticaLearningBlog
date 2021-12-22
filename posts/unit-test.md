---
title: "Unit Testing Node.js REST API (MongoDB) with Mocha"
date: "July 16 2021"
excerpt: "Imagine yourself registering for a few days long conference about JavaScript. Before you go there, you have to enter your information and get a ticket. Once you reach the conference, security checks your ticket, ID, and give you a special "guest card". With that card, you can enter the conference area, leave it, and come back whenever you want. You don't have to give all of your personal information over and over again, nor show your ticket and ID. How is that? It all thanks to the "guest card". Now think, what if there were no tickets nor "ID cards" for such events. Then you would have to prove your credentials in a very tedious way, every time you enter the area."
cover_image: "/assets/posts/unit_testing.png"
---

Many of us are focused on writing the code to that extent, we very often tend to forget about testing it. Some of you may say just run the app at check it manually. Well, it may work for some smaller apps, but what if we forget about some edge case or our app simply grow bigger? Not to mention, working on a bigger project in a team. That is why there are even separate teams responsible only for writing tests. Even if you are just a learner or a potential junior dev candidate, it is better to grasp some testing knowledge and start testing your apps. Indeed, there are many more things to be said about testing, as it is a broad topic.

<br>

This time, we will stick only with the absolute basics about testing REST API routes. In my previous tutorials, we were building a simple REST API with Node.js and MongoDB. Hence, this time we will continue developing the same project by adding new features, so you can either get the boilerplate code from the previous tutorials or stick along with me and try to implement the code inside of your application.

<br>

## Mocha - The Framework

<br>

To make our testing working easier, we will need a few tools. [Mocha](https://mochajs.org/) is a JavaScript framework for testing purposes. All of our tests will base on the top of Mocha, but it's not the only tool. Treat it as a skeleton for our "testing" body.

<br>

## Chai

<br>

Once we have our testing framework, we will also need some library that will help us "compare" values and give results accordingly. [Chai](https://www.chaijs.com/) is a library that can be used with many tools, but in this project, we will use only the `expect` function that will help us compare the expected values to the actual ones.

<br>

## Supertest

<br>

REST API, like the name itself explains, is based on the API calls. That is why we will need some extra tools that will help us run the whole app with the API calls and database connection. Thanks to [Supertest](https://www.npmjs.com/package/supertest) library, it becomes quite easy. It allows us to import our app module to the testing files, run the app temporarily for testing purposes and send API calls.

<br>

## Coding Time

<br>

First of all, we will need to install all of the dependencies. Open the project folder, go to the terminal and type in

```
npm i mocha chai supertest
```

It will install all of the necessary dependencies, and we are ready to go.

The next step will be configuring the `package.json` file, by adding a new script for testing. Open the package.json file and add the following line inside of the scripts:

```
"test": "NODE_ENV=testing mocha --recursive --exit --timeout 10000"
```

<br>

`NODE_ENV=testing` means that we set the global environment variable called "NODE_ENV" inside of the `.env` file to "testing", so we will have to create it. For the time being you can open the `.env` file and add the following line `NODE_ENV="development"`.

<br>

Then we have "mocha" which as you may guess, will run the mocha, and after that, we have several flags. `--recurisive` means that mocha will look inside of the subdirectories for testing files, `--exit` will force mocha to stop working once it's done with testing, and `--timeout 10000` will give us more time for the processing time. As our app connects to the database, reads and creates data, it may take some time to finish. If we didn't set this timeout, it would simply crash.

<br>

Another point related to the configuration is creating a new collection inside of the database because we will add the same data over and over again.

<br>

1. Open MongoDB dashboard
2. Go to the given project
3. Create a new collection
4. Add a new variable in the `.env` file called "MONGO_URI_TEST". Now you can basically copy-paste the previous link of the original database, but change the name of the collection in the string, to the test one.

<br>

All right! Our test database is created and almost everything is ready to start writing tests. But we will need to change some settings inside of the "app.js" file before we move on.

<br>

Open "app.js" file and add a new variable called "database" right after "port" variable

<br>

```
let database = process.env.MONGO_URI;
```

<br>

Now in the part which connects with the database, change the first argument to that variable so it looks more or less like that:

```
mongoose
  .connect(database, {
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

Now right above it, add the following code:

<br>

```
if (process.env.NODE_ENV === "testing") {
  database = process.env.MONGO_URI_TEST;
}
```

<br>

It will set our database variable to the test database one, based on whether we are in testing mode or not.

<br>

At the bottom of the **app.js** file add the export expression so that we can import it into the testing files.

`export default app;`

<br>

## Testing Time

<br>

Finally, we can move on to writing tests. In the root directory create a new folder called "test" and inside of it another one called "api", then create a file called **users.test.js**. Since there is only one route called "users" in our app, we will test only that route. But the more routes your app has, the more tests you can add.

<br>

Inside of the **users.test.js** file, we will have to import a few libraries and modules:

<br>

```
import request from "supertest";
import { expect } from "chai";
import dotenv from "dotenv";
dotenv.config();

import app from "../../app.js";

import User from "../../models/user.model.js";
```

As we will add new users to the database, lets create some variables that will stay in the global scope of the testing file.

```
const tempUser = {
  username: process.env.USER_TEST,
  password: process.env.USER_TEST_PASSWORD,
};

let tempToken;
```

As you can see, there are two more values that can be added to the ".env" and those are example username and password.

Just to be on the safe side, and give our app some extra time to establish the database connection let's add a timeout function.

```
before(function (done) {
  this.timeout(3000);
  setTimeout(done, 2000);
});
```

After that, we can add tests functions. Let's start with signing up new users:

```
describe("POST users", () => {
  it("should register new user with valid credentials", (done) => {
    request(app)
      .post("/users/signup")
      .send(tempUser)
      .expect(201)
      .then((res) => {
        expect(res.body.username).to.be.eql(process.env.USER_TEST);
        done();
      })
      .catch((err) => done(err));
  });

  it("shouldn't accept the username that already exists in the database", (done) => {
    request(app)
      .post("/users/signup")
      .send(tempUser)
      .expect(400)
      .then((res) => {
        expect(res.body.message).to.be.eql("Username is already in use");
        done();
      })
      .catch((err) => done(err));
  });
});
```

<br>

Each of the methods on a given route will be divided into separate `describe` functions with the first parameter as a description string, and the second one as callbacks for executing the tests. Every single test will be inside of the `it` function which has a similar syntax to descript, with the exception of `done` parameter which will be called each time we move on to the next test. Indeed `done` parameter adds some kind of asynchronous logic to our tests. Then we call `request` function from "supertest" library, which will then execute API calls with a parameter such as adding the method, body, setting headers, and getting the response. We do the testing inside of the `then` part, and at the end, we always have to add `done()` as otherwise, our tests will get stuck at that point.

<br>

Now you can run the test with the following command `npm run test`. It will automatically run mocha, which will execute all of the tests and show the results in the console. By the convention, it is always better to write tests and test each of them right after writing. If it fails, try to fix the problem and do not move on with writing new tests until you get the first one passing.

<br>

When tests are passing it's time to add new ones. Let's test the "PATCH" methods now:

```
describe("PATCH users", () => {
  it("should accept correct credentials", (done) => {
    request(app)
      .patch("/users/login")
      .send(tempUser)
      .expect(200)
      .then((res) => {
        expect(res.body.message).to.be.eql("User logged in successfully");
        tempToken = `Bearer ${res.body.accessToken}`;
        done();
      })
      .catch((err) => done(err));
  });

  it("shouldn't accept invalid password", (done) => {
    tempUser.password = process.env.USER_TEST_PASSWORD + "asdf";
    request(app)
      .patch("/users/login")
      .send(tempUser)
      .expect(400)
      .then((res) => {
        expect(res.body.message).to.be.eql("Invalid password");
        done();
      })
      .catch((err) => done(err));
  });

  it("shouldn't accept non-exisiting username", (done) => {
    tempUser.username = process.env.USER_TEST + "asdf";
    request(app)
      .patch("/users/login")
      .send(tempUser)
      .expect(404)
      .then((res) => {
        expect(res.body.message).to.be.eql("Account not found");
        done();
      })
      .catch((err) => done(err));
  });

  it("should log out users with valid token", (done) => {
    request(app)
      .patch("/users/logout")
      .set({
        Authorization: tempToken,
      })
      .expect(200)
      .then((res) => {
        expect(res.body.message).to.be.eql("User logged out");
        done();
      })
      .catch((err) => done(err));
  });
});
```

<br>

The idea is very similar to the previous one, with the extra detail of storing the user's token and using it for logging out purposes.

<br>

After finishing the tests, we should get rid of the temporary user that we have created in our test database.

<br>

```
after(async () => {
  try {
    await User.deleteOne({ username: process.env.USER_TEST });
  } catch (err) {
    console.error(err);
  }
});
```

<br>

Just like before starting tests we had a `before` function, now we have `after` function which deletes the temporary from our test database, to let us execute the same tests once again.

<br>

If everything went OK, you should see something like that:

<br>

![Successful Tests](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n8b2hvj2ynm1itb2qmzk.png)

<br>

## Conclusion

<br>

Testing is a huge topic, and we have only scratched the surface. Hopefully, it gave you some idea of how to test your API routes and how to implement also database in it. Don't forget to clean up after each test, and avoid testing on the production database. Stay tuned for more, as in the next tutorial I will teach you how to add email authentication to your application without using any external services such as Firebase or AWS.
