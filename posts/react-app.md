---
title: "From Scratch to Working App - Building a React Library App"
date: "March 1 2021"
excerpt: "While learning web development, one of the most common patters for building projects is building a To-Do apps. Why is it like that? Most probably because this kind of applications, even though very simple, can help you review the knowledge of the core syntax and functions. There should be an event handler, some kind of state, and DOM manipulation. As a result on the web, we can find millions of To-Do apps. Why not take this idea and change it a bit to bring some fresh air into the room? That is how the Books Library App came to mind as an idea for this tutorial."
cover_image: "/assets/posts/react_app.jpg"
---

While learning web development, one of the most common patters for building projects is building a To-Do apps. Why is it like that? Most probably because this kind of applications, even though very simple, can help you review the knowledge of the core syntax and functions. There should be an event handler, some kind of state, and DOM manipulation. As a result on the web, we can find millions of To-Do apps. Why not take this idea and change it a bit to bring some fresh air into the room? That is how the Books Library App came to mind as an idea for this tutorial.

<br>

In this tutorial, we will learn how to create a React application from a scratch, commit it to GitHub and deploy it to [Netlify](https://netlify.app/). I also assume that you have your development environment set up and already familiar with:

<br>

- JavaScript, HTML, and CSS
- Basics of React (if not you can check out my [tutorial](https://dev.to/pawel/what-is-react-how-to-use-it-and-why-react-js-basics-for-beginners-in-plain-english-3cl7))

<br>

Source code can be found [here](https://github.com/KowalewskiPawel/React-Book-Library) and the live version of the deployed app [here](https://reactbooklibrary.netlify.app/).

<br>

## create-react-app

<br>

First of all, create a folder for our app and start the terminal in the given folder. In the terminal type in the following command

<br>

`npx create-react-app bookslibrary`

<br>

Of course, you can change the name of the app to whatever you like. In a couple of minutes, your project template should be ready.

<br>

## Project Tree

<br>

In order not to deal all the time with creating new files and folders, let us organize everything from the beginning. Your application folder tree structure should look like that

<br>

![project](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1pumvetmihyzz7ljn4i3.png)

<br>

You can delete the unnecessary files from the **src** folder, leave just

<br>

- App.css
- App.js
- index.js
- index.css

<br>

You can erase everything from **App.css**, **App.js** and **index.js** files, while **index.css** can stay in its original form. Another part is keeping the rest of the components in **components** folder. You can create 3 blank .js files inside of it

<br>

- Header.js
- List.js
- Footer.js

<br>

Additionally, you can also copy **logo192.png** from the **public** folder to the **src** folder. Now we focus purely on coding our app.

<br>

## Roots

<br>

Both **index.js** and **App.js** will have a very limited role, they will just wrap the components and delegate them to the root element in our **index.html** file.

<br>

This is how your **index.js** file should look like

<br>

```
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

<br>

and **App.js**

<br>

```
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
```

<br>

App component will be just a function component, and the whole logic of our application will live in the components folder. At the beginning of this file, we **import** all of the components and render them inside of the App component, which is later passed to the **index.js** file.

<br>

## Components

<br>

Let us start with the core of this application which will live in the List.js file. You can start writing this component by defining a **class**, **constructor** method and **render** method.

<br>

```
import React from "react";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }  render() {
    return (
      <div>
      </div>
    );
  }
}
```

<br>

At this point, we have only an empty class component. Inside of state, there is only one key — books, which represents an empty array. We will store the objects representing our books in that array.

<br>

## Forms

<br>

Our application does not render anything yet, and the first element which will be needed to register new books to the library will be the **form element**. In regular HTML, forms are one of those elements which help us interact with the website, and all of the events are handled by the default by DOM, but in React we will want forms to transfer the data to React component and keep it in our **state**. We will track changes in form using the **onChange** attribute inside of the tags, and assign them to the handler methods.

<br>

You can add the code below to the render method, inside the `<div>` elements.

<br>

```
<form className="bookForm" onSubmit​={this.submitHandler}>
          <label for="bookName">Book Title</lablel>
          <input
            id="bookName"
            name="bookName"
            type="text"
            placeholder="Book Title"
            maxLength="40"
            onChange​={this.changeHandler}
            required
           />
          <label for="bookAuthor">Author</label>
          <input
            id="bookAuthor"
            name="bookAuthor"
            type="text"
            placeholder="Book Author"
            maxLength="30"
            onChange​={this.changeHandler}
            required
          />
          <label for="read">Read</label>
          <select
            id="read"
            name="read"
            onChange​={this.changeHandler}
            value={this.state.read}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <input id="submit" type="submit" value="ADD NEW
BOOK" />
</form>
```

<br>

Every element inside of our form should be wrapped in `<form>` element, pay attention to the fact that the form itself also has an **onSubmit** attribute which calls another method to submit the information from our form. In total, we have 3 `<input>` elements, each of them has attributes such as **id**, **name** and **type**. There are also extra attributes inside of text input elements, and those are **placeholder**, **maxLength**, and **required** in the end. They are kind of self-explanatory, so I will not dwell too much on them. We could skip those parts, or add them in JavaScript code, but in my opinion, code will look much cleaner like that. What is crucial here is **onChange** attribute and its handler. Every time we hit change something in those fields the corresponding value in the application’s state will be updated. Moreover, look at the last option before submit button. It is `<select>` element with two options, and we also set a default value that will be retrieved from the start every time we add a new book. Just in case someone just skips this part, it will stamp the book as not finished.

<br>

## State

<br>

Because we already have few references to the state, let us add missing keys in the component’s state object.

<br>

```
constructor(props) {
    super(props);
    this.state = {
      bookAuthor: "",
      bookName: "",
      read: "No",
      books: [],
      };
     }
```

<br>

That is all about the state part of this application.

<br>

## Handlers

<br>

There is already a form where we can input the necessary data, we also have the state part ready, but there are no handler functions that can handle all of those events. Let us add them now.

<br>

```
changeHandler = (event) => {
    const nam = event.target.name;
    const val = event.target.value;
    this.setState({
      [nam]: val,
    });};
```

<br>

Since we have 2 input text fields and 1 select, we will have to handle the change in each of them. To not to repeat ourselves (DRY) we will reuse the same handler for each of them.

<br>

Each time you change something in the input fields or select a button, **changeHandler** function will be triggered, as an argument, we take the **event** object, and inside you can see that there are two variables: **nam** and **val** that will store information dynamically about each of the input fields. In the end, we call `this.setState` function and pass the object as an argument. Inside of the object again we refer to **nam** variable as a given key name, notice that we put **nam** in the square brackets as it is the convention for the object’s keys.

<br>

Now when we have all of the necessary values in our state, it is time to submit the form and add a new book object to the books array. Because of that, we will need another handler called `submitHandler`.

<br>

```
submitHandler = (event) => {
    event.preventDefault();
    const bookNameVal = this.state.bookName;
    const bookAuthorVal = this.state.bookAuthor;
    const readVal = this.state.read;
    if (bookNameVal && bookAuthorVal) {
      this.setState(
        (prevState) => ({
          books: [
            ...prevState.books,
            {
              bookName: bookNameVal,
              bookAuthor: bookAuthorVal,
              read: readVal,
            },
          ],
        })
      );
}};
```

<br>

Once again, we use **event** object in this handler, but this time for a bit different reason. Normally, when you create a form in HTML and try to submit it, the page will automatically reload. In our case, we do not want it, and in general most of the time in web development we will want to prevent this situation from happening. `event.preventDefault();` becomes quite clear at this point. For the sake of clarity, we store key values in three variables, as you can see they will be copied directly from the state. Then in order to avoid adding books with missing title and/or author field, we wrap the rest of the code inside of **if** statement. Later on, we use `this.setState` method to add a new book to the books array. There are many ways of doing it, in my case I used **_spread operator …_** and bind a new book at the end of the array.

<br>

## Testing with ReactDev Tools

<br>

It is time to make some tests before we move, and also make use of ReactDev Tools extension. Temporarily you can comment out Header and Footer components. Notice that in JSX traditional way of commenting in JavaScript will not work, instead, you can wrap the elements inside of curly brackets and then use comment symbols, just like that.

<br>

```
import List from "./components/List";
//import Header from "./components/Header";
//import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      {/*<Header /> */}
      <List />
      {/*<Footer /> */}
    </div>
  );
}
```

<br>

After that go to the terminal and enter the command `npm start`. You should see the input fields and submit button, but even after submitting the form, you will not see anything as there is no element to show our books yet, so you can use ReactDev Tools to check the component’s state and array. Each time you submit the new book, you should see it in the books array.

<br>

![checkingstate](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rcs7wbniluh3ax6w5ge6.jpg)

## Table

<br>

As our form and state are ready, handlers work and we can submit new books to the library, now we need a way to display them somehow. One of the possible ways to do it is by creating the table element, and then assign the values from `this.state.books` array, to each new row.

<br>

Right below the form in List component add this piece of code

<br>

```
<table>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Finished (Yes/No)</th>
            <th colSpan="2">Settings</th>
          </tr></table>
```

<br>

We have the table columns ready now, yet there are no entries visible yet. Let’s create a reference to the books array and keep it in a variable, but this `let books = this.state.books;` variable right after the `render()` method.

<br>

```
render() {
  let books = this.state.books;
```

<br>

It is time to display books on the table by mapping the books array.

<br>

```
<table>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Finished (Yes/No)</th>
            <th colSpan="2">Settings</th>
          </tr>
{books.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.bookName}</td>
                <td>{item.bookAuthor}</td>
                <td>{item.read}</td>
                <td id="settings">
                </td>
              </tr>
            );})}
```

<br>

Now, you should be able to see all of the books displayed inside of the table. Does it mean that our project is finished? No.

<br>

## What if we changed our mind about some of the books?

<br>

Because of that reason, we will also add two buttons, in the settings column, to allow the user to change the state of each book from unfinished to finished and vice-versa, plus remove button which will enable the user to completely get rid of a given book.

<br>

Inside of the last `<td>` element with id **settings**, let’s add the following code.

<br>

```
<td>{item.bookName}</td>
                <td>{item.bookAuthor}</td>
                <td>{item.read}</td>
                <td id="settings">
                  <button
                    onClick​={() => {
                      item.read === "Yes"
                        ? (item.read = "No")
                        : (item.read = "Yes");
                      this.forceUpdate();
                    }}
                  >
                    {item.read === "Yes" ? "Still reading" : "Finished"}
                  </button>
                  <button
                    onClick​={() => {
                      this.removeBook(index);
                    }}
                  >
                    Remove                  </button></td>
```

<br>

In the fourth column, now we have two buttons representing the book in each row. In the first one we also dynamically change the name, depending on the given object’s read property. `onClick` methods are pretty straightforward, we will only need to add of course missing handler for `removeBook` method. However, in the first button we have a mysterious function `this.forceUpdate();` as you may remember, our component will be rerendered each time we call `this.setState` method, as we do not call this method here, `this.forceUpdate();` is a kind of workaround so we can see the book’s read status in real-time.

<br>

The only missing part now is `removeBook` handler, so we can add it now.

<br>

```
removeBook = (index) => {
    const booksArr = [...this.state.books];
    if (booksArr) {
      this.setState(
        {
          books: booksArr.filter((book, bookIndex) => {
            return bookIndex !== index;
          }),
        }
      );
    }
};
```

<br>

For each removed booked, we will need its index, so then we can set a new state using the filter method which will omit only the book with the given index.

<br>

OK, so it looks like our application only needs some style and we are ready to deploy. Not yet, as you can see the application will clear its state each time we refresh the page, which makes it useless. We will need to find a way how to store data for each user, and let them retrieve it each time they visit the website. Of course, the best option would be to create a database, a backend login etc. But this would make our app a full-stack application and make things way more complex. We can store the state for each user in two ways.

<br>

- Using local or session storage
- Firebase database

<br>

In this tutorial, we will pick the first.

<br>

## localStorage

<br>

Every user on his or her own personal web browser client has access to the local storage of a given device. That is where websites store cookies for example. In our case, we can use it to store the states object in the local storage of a given user of our application. In fact, it is much easier to do then it sounds, [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) is a global object available in each web browser. We will need just a few extra lines of code and two more methods.

<br>

Firstly, we need to add the `localStorage` function as a second argument to the `setState` function.

<br>

```
/* localStorage function        () => {
          localStorage.setItem("books", JSON.stringify(this.state.books));}

        */submitHandler = (event) => {
    event.preventDefault();
    const bookNameVal = this.state.bookName;
    const bookAuthorVal = this.state.bookAuthor;
    const readVal = this.state.read;
    if (bookNameVal && bookAuthorVal) {
      this.setState(
        (prevState) => ({
          books: [
            ...prevState.books,
            {
              bookName: bookNameVal,
              bookAuthor: bookAuthorVal,
              read: readVal,
            },
          ],
        }),
        () => {
          localStorage.setItem("books", JSON.stringify(this.state.books));
        }
      );
    }
};
```

<br>

We also have to add it to `removeBook` handler.

<br>

```
removeBook = (index) => {
    const booksArr = [...this.state.books];
    if (booksArr) {
      this.setState(
        {
          books: booksArr.filter((book, bookIndex) => {
            return bookIndex !== index;
          }),
        },
        () => {
          localStorage.setItem("books", JSON.stringify(this.state.books));
        }
      );
    }
};
```

<br>

While changing the book read status, we will also have to update the localStorage so we need to add another function `this.saveLocal();` to `onClick` listener in each of the books.

<br>

```
{books.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.bookName}</td>
                <td>{item.bookAuthor}</td>
                <td>{item.read}</td>
                <td id="settings">
                  <button
                    onClick​={() => {
                      item.read === "Yes"
                        ? (item.read = "No")
                        : (item.read = "Yes");
                      this.saveLocal();
                      this.forceUpdate();
```

<br>

Plus the handler itself.

<br>

```
saveLocal = () => {
    localStorage.setItem("books", JSON.stringify(this.state.books));};
```

<br>

To display books stored in each user’s local storage, we will make use of one of the React Mounting lifecycle methods called `componentDidMount()` which is called the last method of component’s mounting lifecycle.

<br>

In other words, each time the page is loaded, this function will check if there is anything in the local storage, and call `this.setState` method if there is something waiting in the local storage.

<br>

```
componentDidMount() {
    const books = localStorage.getItem("books");
    if (books) this.setState({ books: JSON.parse(books) });
}
```

<br>

## Header and Footer

<br>

To make our application look a bit better, let’s add the following code to **Header.js** and **Footer.js** files.

<br>

### Header.js

<br>

```
import React from "react";
export default class Header extends React.Component {
  render() {
    return (
      <h1 className="Header">
        <img id="logoHeader" src="logo192.png" alt="React Logo"></img>
        <p>React Book Library</p>
      </h1>
    );
  }
}
```

<br>

### Footer.js

<br>

```
import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer">
        <p>
          Created with{" "}
          <img id="footerLogo" src="logo192.png" alt="React Logo"></img> by:
          Pawel Kowalewski
          <br />© All rights reserved
        </p>
      </footer>
    );
  }
}
```

<br>

## CSS

<br>

Our application is fully functional at this moment, but it does not look very attractive, let us add some style. **App.css** file should be already imported in **App.js** component. I will not explain CSS in this tutorial, so feel free to change this file as you wish or just copy and paste it.

<br>

### App.css

```
html {
  background-color: antiquewhite;
}
.bookForm {
  display: grid;
  width: 400px;
  border: solid black 4px;
  border-radius: 20px;
  margin: auto auto 40px;
  padding: 20px;
  background-color: rgb(121, 121, 121);
  color: white;
  align-content: center;
}
#bookName {
  margin: 8px;
}
#bookAuthor {
  margin: 8px;
}
#read {
  margin: 8px;
}
#submit {
  margin: 8px;
  border: solid black 2px;
  border-radius: 8px;
}
table {
  width: 800px;
  margin: 0px auto;
  border: solid black 2px;
}
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  border: solid 2px black;
  padding: 4px;
  background-color: rgb(121, 121, 121);
  color: white;
}
th {
  text-align: left;
  background-color: rgb(165, 162, 162);
  color: white;
}
#settings {
  width: 200px;
}
#settings > * {
  margin: 4px;
  border: solid black 2px;
}
.Header {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(54, 47, 46);
  color: white;
}
.Header > p {
  margin-left: 0px;
  margin-right: auto;
}
.Footer {
  text-align: center;
  padding: 2px 0px 2px 0px;
  margin-top: 20px;
  background-color: rgb(54, 47, 46);
  color: white;
}
#logoHeader {
  margin-right: 10px;
  margin-left: auto;
  width: 40px;
  height: 40px;
}
#footerLogo {
  width: 20px;
  height: 20px;
}
@media only screen and (max-width: 600px) {
  .bookForm,
  table {
    width: auto;
    table-layout: fixed;
  }
  td {
    word-break: break-all;
  }
}html {
  background-color: antiquewhite;
}
.bookForm {
  display: grid;
  width: 400px;
  border: solid black 4px;
  border-radius: 20px;
  margin: auto auto 40px;
  padding: 20px;
  background-color: rgb(121, 121, 121);
  color: white;
  align-content: center;
}
#bookName {
  margin: 8px;
}
#bookAuthor {
  margin: 8px;
}
#read {
  margin: 8px;
}
#submit {
  margin: 8px;
  border: solid black 2px;
  border-radius: 8px;
}
table {
  width: 800px;
  margin: 0px auto;
  border: solid black 2px;
}
table,
th,
td {
  border-collapse: collapse;
}
th,
td {
  border: solid 2px black;
  padding: 4px;
  background-color: rgb(121, 121, 121);
  color: white;
}
th {
  text-align: left;
  background-color: rgb(165, 162, 162);
  color: white;
}
#settings {
  width: 200px;
}
#settings > * {
  margin: 4px;
  border: solid black 2px;
}
.Header {
  display: flex;
  align-items: center;
  text-align: center;
  background-color: rgb(54, 47, 46);
  color: white;
}
.Header > p {
  margin-left: 0px;
  margin-right: auto;
}
.Footer {
  text-align: center;
  padding: 2px 0px 2px 0px;
  margin-top: 20px;
  background-color: rgb(54, 47, 46);
  color: white;
}
#logoHeader {
  margin-right: 10px;
  margin-left: auto;
  width: 40px;
  height: 40px;
}
#footerLogo {
  width: 20px;
  height: 20px;
}
@media only screen and (max-width: 600px) {
  .bookForm,
  table {
    width: auto;
    table-layout: fixed;
  }
  td {
    word-break: break-all;
  }
}
```

<br>

## Deployment

<br>

As our application is finished, it is finally time for deploying it, to make it available for other users. You may also want to change the title in **index.html** file and icon.

<br>

Since GitHub and Netlify are very popular free services, I have decided to use them in this tutorial but you are free to deploy it anywhere you want. If you want to follow with me, I assume that you have already an account on GitHub and Netlify.

<br>

Firstly go to GitHub, login and click on add new repository.

<br>

![github](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wvzebx4banlgs6laowm2.png)

<br>

Give it some name, it can be both Public or Private and then click Create repository.

<br>

![github](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jg6yatipo8mide9wooar.png)

<br>

Go to the main folder of your app and open a terminal there.

<br>

Type in the following commands:

<br>

1. `git init`
2. **copy this line from GitHub (ctrl + shift + v to paste into the terminal)**

![github](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uh2n1xk9gby72nakqlly.png)

3. `git status` — to check for modified files

4. `git add .` to add all of the files

5. `git status` again to check if they are green now

6. `git commit -m “first”`

7. `git branch -M main`

8. `git push -u origin main`

<br>

Now your code should be uploaded to GitHub repository.

<br>

Go to [netlify.app](https://netlify.app/) and login with your GitHub account. Once you are logged in click **New site from Git**
<br>

![newsite](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6vd3m33alh67s9b9hysk.png)

<br>

At this point, you may need to have to configure GitHub settings first. Go to GitHub and click on your profile and then settings. After that click on **Applications** option from the menu and once you see Netlify click **configure**.

<br>

![configure](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qeu84rjvfjv47xcamkps.png)

<br>

Then scroll down until you will see Repository access, if you don’t mind you can just pick **All repositories**, or select the given repository.

<br>

![repositories](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/96t1zax8epqq91lv3usw.png)

<br>

Now we can proceed to Netlify again, when you are back at Netlify click on this option.

<br>

![netlify](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/tepw6jzv9ykgfan6k683.png)

<br>

Of course, click GitHub

<br>

![newsite](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e5q8sq2cr7sivwg8ulxn.png)

<br>

Click on the given repository, and in the last part click **Deploy site**

<br>

![last](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/swq6cyxth0ab7rhvu56z.png)

<br>

**Congratulations!** Your React app should be deployed and ready to use within a few minutes. Note that, you can still work on your application and make updates. Each time you commit something to the same repository, Netlify will fetch the new data and deploy the updated version automatically for you.

<br>

## Final thoughts

<br>

It was quite a long journey, I hope that you could keep on coding along with me in this tutorial and that everything was clear. However, if you have some questions, comments, suggestions etc. Please feel free to leave a comment or contact me via this website.
