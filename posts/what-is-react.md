---
title: "What is React? How to use it and why? React.js basics for beginners in plain English"
date: "February 28 2021"
excerpt: "Before answering the questions above, let us have a quick look back into the past and history of JavaScript. Many years ago, JavaScript was very limited in its usage, basically, the only purpose of this language was to add some mechanics or let us call it logic to web pages on the front-end side. Some even did not see it as a proper programming language. However, with very quick changes in social media, the popularization of smartphones and the internet in general, JavaScript got a new life. Since JavaScript, was the only programming language living in the web browsers, there was a need to improve the language itself, and eventually take it outside of the web browser box."
cover_image: "/assets/posts/what_is_react.jpg"
---

Before answering the questions above, let us have a quick look back into the past and history of JavaScript. Many years ago, JavaScript was very limited in its usage, basically, the only purpose of this language was to add some mechanics or let us call it logic to web pages on the front-end side. Some even did not see it as a proper programming language. However, with very quick changes in social media, the popularization of smartphones and the internet in general, JavaScript got a new life. Since JavaScript, was the only programming language living in the web browsers, there was a need to improve the language itself, create new tools for programmers, and eventually take it outside of the web browser box and let programmers use it also on the back-end side.

<br>

## Do Not Repeat Yourself

<br>

OK, but what is [React](https://reactjs.org/), and why should we even care? With the rapid change in the websites, growing social media, and new features, there was a need to automatize some things, and as one of the programming principles says - don't repeat yourself or shortly DRY. Readers who used the internet before the 2010s may remember that old HTML websites had a very specific routing system - each time you clicked somewhere, you were taken to a different page, and the whole pages used to be reloaded from a separate .html file. It is not hard to guess that this kind of solution gives us many limitations, requires us to rewrite a bunch of code several times, and last but not least it is a horrible solution for the performance. At this point, frameworks, and libraries such as React came into the game. Both with new updates to JavaScript itself (ES5, ES6, and so on) and the emergence of developer tools. Building complex web applications became easier to digest and React particularly helped developers to create easily reusable User Interface (UI) parts.

<br>

## Virtual DOM Painter

<br>

Think of it like that, each web application or even a simple web site has some kind of a common structure. For example a logo at the top with login-in or sign-in buttons, on the other side we have a menu list, at the bottom a footer and a main content in the middle. Why should we load each of these parts over and over again? React helps developers, to organize the code better and reuse the same parts in multiple places, sometimes even without reloading certain parts. But how? By the time of starting learning React or any other framework or library, it is better to have some foundations of JavaScript and DOM manipulation. I will not cover this topic here, so if you have no idea what is DOM - take a break and do your research. Going back to the topic, when you load a page, every HTML element appears one by one on the page, creating a DOM structure. With react we can have let us call it two layers of DOM, the first actual visible DOM, and the second one - virtual. React constantly checks and compares the real DOM with the virtual one, once there are some changes that need to be updated, React quickly localize them and update only the necessary part without a need to reload the whole page.

<br>

## Expectations versus Reality

<br>

That is enough of theory, but let us have a short break and reflection before we move on to more practical parts. Even though in theory it sounds cool, in reality, it does not mean that you can just jump into React with only vanilla JavaScript knowledge and make your coding process easier. Personally, I have been learning JavaScript, HTML, and CSS basics for nearly two years, and each time I stumbled on React, I failed. If you are just a beginner like me, React probably will not make your job easier, it can even make simple things look way more complicated. So why should we learn React then? There are plenty of reasons why it is worth learning React. Despite the things that were already mentioned about the theory behind React, most of the companies use some library or framework, and React is currently one of the most if not the most popular ones. Companies and websites such as Uber, Airbnb, Tesla, Dropbox, WhatsApp and Amazon, use React as their tech stack. Still not convinced? So what about using JavaScript, to build mobile applications? With a framework called [React Native](https://reactnative.dev/), which is of course based on JavaScript and React, you can build mobile applications which can be run both on iOS and Android phones.

<br>

## Two Ways of Creating React App

<br>

Roll up your sleeves and let us put our hands on React for the first time. When we do not use any libraries or framework, we simply create an HTML file, and put both CSS code and JavaScript scripts inside of it, or just link few files together. After all, our website should work just fine after opening HTML file with any web browser. Not in this case, even though React is not a framework, but just a library, still it heavily relies on the modules it needs to work and there is also a certain system in which React works. Moreover, since its syntax relies on the ES6 version of JavaScript, React uses Babel to convert its code to make older web browser work with it. There are two ways of creating React applications, first one is very similar to what probably most of you have already done - creating everything directly in the HTML file. It is possible with React, but in practice, no one uses it that way. It is not production-friendly and can put some limitations after some point. You can only use it for testing or just to have a first glance at what it looks like. To create the simplest possible React app directly into an HTML file, just create an HTML file, name it whatever you like and write or copy this code.

<br>

```
<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">
      class Hello extends React.Component {
        render() {
          return <h1>Hello World!</h1>;
        }
      }

      ReactDOM.render(<Hello />, document.getElementById("root"));
    </script>
  </body>
</html>

```

<br>

Most of the things look pretty much the same as vanilla JavaScript, with a few key differences. In the `<head>` part, we can see that there are 3 different scripts loaded. The first one is React itself, the second one is React-DOM library, which is responsible for DOM manipulation and the last one is Babel - a JavaScript transcompiler that converts ES6 syntax to make it backwards compatible. We have just one element inside of the `<body>` and it can be anything, as long as we hook up React code to it. In this case React code is in between

```
<script type="text/babel">
```

tags. You can easily guess, why it is text/babel since Babel automatically converts this code to make it compatible with older web browsers. That is all for this part, you can try to guess or analyze the whole structure. In the latter part of this article, we will use the second way of creating React applications - setting up React environment, and we will also focus on the details.

<br>

## Setting up the Environment

<br>

Until here, things were not that much complicated and even with basic HTML knowledge you should have been able to keep up. In this part, things are getting a bit more serious and maybe also get a bit complicated without prior knowledge of certain topics. That is why, I strongly recommend you to have a look at the concepts below, before moving on.

<br>

- Previous experience with HTML and CSS
- Vanilla [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) basics knowledge and ES6 syntax ([arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) and [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let))
- [DOM manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_basic_dom_manipulation)
- Command-line basic proficiency

<br>

Moreover, you will also need a tool called [Node.js](https://nodejs.org) installed on your computer (macOS, Linux or Windows) and npm which will be installed automatically with Node.js. Node is a JavaScript runtime that lets you use JavaScript outside of the web browser, and npm is a package manager which helps in downloading and updating libraries, modules, and other tools to our project, without the need for rewriting the code or adding separate links in HTML file. Another thing is that we use Node.js from the command line, so you will have to find a terminal (Shell) on your computer.

<br>

- CTRL + ALT + T on Linux
- Windows - RUN - "cmd" on Windows
- Control + Option + Shift + T on on MacOS

<br>

After opening the terminal, you can check do you have node and npm installed on your computer and the version as well. Type in node -v and npm -v to check both of them.

<br>

![terminal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dyqtjgq30x8459uxqx38.png)

<br>

We are almost ready, if you do not have any code editor yet it is time to download one. Personally, I can recommend most probably one of the best and most popular - [Visual Studio Code](https://code.visualstudio.com/). However, you are free to use any other code editor. Additionally, we may want to add a React DevTools [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) extension to your internet browser, to keep track of React components and their state, which we will cover in the next part.

<br>

Once we have both Node.js and code editor ready, there is only one missing part of setting up the environment, and it is a program called create-react-app. We install it from the command line by typing

<br>

```
npm install -g create-react-app
```

<br>

```
npm install
```

is one of the most common commands that you will use while creating your apps, not just React! So, let us destruct the whole command. Firstly `npm install` - after that we generally write the pack name that we want to add to our local project, however in this case as you can see we also have a flag **-g** what means global, and in this case, the program or pack will be available globally anywhere on our computer, if you use it for adding specific modules to your local project, then you will not need **-g** flag.

<br>

## Let's Create Our First React App

<br>

In this part, we will finally make use of Node.js and create-react-app. First of all, create a new folder anywhere on your computer, go to that folder and open a terminal in that directory. When the terminal window is ready and opened in the given directory type in the following command:

<br>

```
npx create-react-app <nameofyourapp>
```

<br>

wherein the place of tags `<name>` you should write the name for your application, and avoid using capital letters in the name. After typing the command, simply click enter and a blueprint for your React application will be created. Notice that in this case, we write **npx** instead **npm** as we execute an application, not install any modules yet. What create-react-app does, is creating a front-end build for your React application, adds some configuration plus under the hood it also handles [Babel](https://babeljs.io/) and [webpack](https://webpack.js.org/) for you. As you may remember Babel is responsible for converting your code to make it backwards compatible and webpack is a tool that like the name says, packs all of the necessary files for the production version, which also includes [minification](<https://en.wikipedia.org/wiki/Minification_(programming)>), making your code smaller and faster.

<br>

![reactappinstallation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wiptotl39ejblyawv3xo.png)

<br>

The process may take up even a couple of minutes, once its done you should see something like this.

<br>

![installedapp](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h3o0mldc8d1fwktavt2g.png)

<br>

After that, you should also see a new folder with the name of your application created. Open this folder, or simply type in

```
cd <nameofyourapp>
```

in your terminal.

<br>

Once you are in your application's folder, type the following command:

<br>

`npm start`

<br>

This command will start a development server, and each time you make any changes in the code, you will see the results in your browser by default under this address:

```
http://localhost:3000/
```

<br>

Your application should look like that now.

<br>

![defaultreactapp](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z93cda0g86kmp99jgcav.png)

<br>

To stop the server you will need to hit CTRL + C. However, at this point you may ask yourself - why do I need to start the server instead of just clicking on the index.html file? Like I have mentioned above, create-react-app under the hood creates many processes which will configure, fetch the necessary modules, and compile the whole project for us. Because of so many dependencies, we have to create a temporary build of our application to make everything work correctly. Meanwhile, in the main folder of the application, you should see this kind of tree.

<br>

![files](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hys6ckx4yw5kaobio6j6.png)

<br>

Our main concern is a folder called **src** (source) as we will make all of the changes, add new files etc. in that particular folder. Despite that, let us have a quick look at what else we have in our application.

<br>

In **package.json** we will find the configuration for our application, including description, and modules used in a given project when **package-lock.json** stores just data about all of the available modules. While **README.me** is a form of documentation.

<br>

The folder **node_modules** contains modules used by our application, so if you install a new module it will be also stored in that folder. You should never commit this folder to GitHub or any other server during deployment, this modules will be automatically fetched during the build process on the server.

<br>

Another folder called **public** contains the static files that will be used to reach our website. There is nothing new in index.html, icon files and logos, so I will skip these ones. You need to remember just that in case you want to change the title of the tab or icon, you will need to make changes in those files as your whole app will be linked with index.html Files **manifest.json** and **robots.txt** are responsible for the configuration of your application from search engines perspective.

<br>

Finally, our main focus is folder **src** where the main source of our application lives. As we create our application from scratch, and the default files are just demo files, you can remove everything from that folder.

<br>

## A New Beginning

<br>

Now, we start with a clean folder and no app at all. Let us create a new file in **src** folder called **index.js** you can do it by typing in `touch index.js` in your terminal after going to the src folder, or you can also create it in Visual Studio Code. After creating index.js file, rewrite the code below.

<br>

![code](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1wceovzirv4jknxm3ck1.png)

<br>

Save it, go to the terminal and start the development server by typing `npm start`

<br>

![helloworld](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rkmts43rajcoh9shwcpn.png)

<br>

And voila! Just 4 lines of code and our first React Hello World app is working. You are free to name the files differently, but by the convention, it is good to keep **index.js** file as the core connection between React and **index.html** file. Let us divide the code into the pieces.

<br>

The first two lines define what modules we want to import to the file in this way:

<br>

```
import <name of the module> from "where"
```

<br>

Nearly every JavaScript file in our React application will start with importing different modules, and sometimes also static files. We can have many other .js files in our projects, which are called application's components, and in each of them we will need to import React module by writing

<br>

```
import React from 'react';
```

<br>

However, as long as **index.js** is the only bridge between **index.html** and the rest of the files, we will need

```
import ReactDOM from 'react-dom';
```

only in that file.

<br>

Let us look at the third line

<br>

```
const helloWorldElement = <h1>Hello World!</h1>;
```

<br>

At this point, you may have had realized that there is something strange here, HTML code directly assigned to a variable without any quotes. It is called JSX which stands for JavaScript XML, but we will focus on this part soon.

<br>

On the last line

<br>

```
ReactDOM.render(helloWorldElement, document.getElementById("root"));
```

<br>

we can see a reference to the ReactDOM object, it has a method called **render** which as you may guess, renders the given object to the assigned element. It can be structured like that:

```
ReactDOM.render(<ElementToRender >, where);
```

<br>

In this case, we have assigned a variable as an element to render, but normally you can put there HTML tags with React components to render, and even wrap few elements inside. **The only rule is that everything should be wrapped into one element.** In the document, there is "root" since when you look into index.html file, you will see just one `<div>` element with an id named "root".

<br>

![indexhtmlfile](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/53z6cnrc772qplo3j0un.png)

<br>

There is no need to keep it strictly in this form, you can change the id of that element to anything you like.

<br>

## JSX

<br>

One of the main characteristics of React is JSX, which as I have mentioned above means JavaScript XML, so what is it? In short, it can be said that JSX enables us to write HTML code directly into JavaScript, with a few caveats. It is a huge game-changer, as it makes the process of developing our applications much easier and faster. Before we move on, it is an important thing to notice that React does not force us to use JSX, but in my opinion, it is much better to use it. Look at this comparison

<br>

```
// code with JSX
const element = <p>JSX</p>;
// code without JSX
const element = React.createElement("p", {}, "Without JSX");
```

<br>

You can also nest other items inside of JSX expression, **as long as you follow the rule of wrapping everything inside of one element.**

<br>

```
const someElement = <div className="box">
                      <h1>Hello World</h1>
                      <p>It is JSX element</p>
                    </div>;
```

<br>

As you can see, there are few HTML elements, but all of them are wrapped inside one element called `<div>`. By the way, please pay attention to the attribute `className`. The reason why it is not called simply `class` like it used to be in classical HTML code is that `class` is a reserved word in JavaScript. There are more examples like that, that is why JSX is NOT exactly the same as HTML code, it is very similar but there as some differences. Calling attributes using camelCase is one of the differences. One more important thing to mention is that you can use even one element in JSX, but EVERY element in JSX should have it's closing.

```
<input type="text />
```

<br>

## Expressions in JSX

<br>

Do you remember **template literals** using backticks and `${}` when you wanted to put some JS expressions inside of a string? JSX has something very similar to that, with the exception that there is no need for backticks and $ sign. If you want to put some kind of JavaScript expression inside of JSX code, you just simply need brackets around.

<br>

```
const todayDate = new Date();
const element = <h2>Today is {todayDate.toDateString()}</h2>
```

<br>

## Components

<br>

Components are the main core of React, those are most of the time type of objects in a class form, which are in fact functions in JavaScript. That is why we can divide components to React into two types:

<br>

- Class Components
- Function Component

<br>

Those are the reusable elements of our applications, which at some point can be wrapped into JSX as a single element and put into parent component to be rendered in the end. Most of the time we will use Class Components, as they give us more possibilities such as state, but nowadays the approach is changing but for the sake of simplicity let us not get into the details now. Function Component is also called Simple Components as they are mainly used just to render some basic content. Before we move, let us change **index.js** file a bit and create a new component **App.js**

<br>

![indexjsfile](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fqr49pwa380k2v2xde7u.png)

<br>

We will move the rest of the application's logic into separate components, in this case, **App.js** that is why we have to first create such a file, and also import it at the beginning. Pay attention to the `<React.StrictMode>` element, it will help us to eliminate potential problems and warn us about them.

<br>

Now let us start with a Functional Component, so we can create one in **App.js**

<br>

![appfile](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/89ifu6hrwg49lwyqgd0t.png)

<br>

It is a pure JavaScript function, which returns JSX. At the end of the component, we have to also add an annotation that we want to export this module and it can be achieved by writing

<br>

```
export default <Module Name>;
```

<br>

or adding export default before function or class.

<br>

```
export default function App() {...}
```

<br>

Note that by the convention components are named with the first capital letter.

<br>

Now let us create a new folder called **components** for the sake of organization it is good to keep other components and files in a separate folder. Inside of **components** folder create a component called **Element.js**

<br>

This time it will be Class Component.

<br>

![component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/64oiz462xxn613v6frot.png)

<br>

There are some differences between Functional Component and Class Component, `function` is changed with `class` moreover we also add extends `React.Component` what means that we will inherit some React.Component object's functions, and also this time we need a method called `render()` to return JSX.

<br>

## Props

<br>

In the previous example, inside of the `<p>` element there is an expression `{this.props.name}` depending on the **name** value of **props** object, the result of this expression will change. So, what are props? Props are a kind of attributes, very similar to HTML tag attributes. On the outside of this component, when mounted somewhere, we can pass different attributes. Let us change the code a little bit first.

<br>

![expression](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/djl2vln87y9gbamoiuh0.png)

<br>

Now we can go back to the App.js component. We will have to import Element.js firstly, then we can render it multiple times inside of the component passing different props for each one.

<br>

![components](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oz1q0aokxydf7b0myhzi.png)

<br>

By the way, some of the code editors have their own terminals, like Visual Code, for example, so you can use it instead of the system's default terminal. Just open the terminal in your code editor and write `npm start`

<br>

![npmstart](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/85ejar4kpluq5k9feqd1.png)

<br>

Then you will see the result

<br>

![live](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ufvnpsd6pdld6jrj72fz.png)

<br>

This is the best and simplest example of how can we reuse the same component many times with different props. Note that you can also use props with **Functional Components**. However, in the case of **Class Components** if you have a constructor, then props have to be also passed into the constructor and React.Component via `super(props)`

<br>

## State

<br>

In this way, we are moving a step further, to a place function that lets us do much more things with React components, and it is called **state**. Every **Class Component** has its built-in **state object**, where values of each component are stored, and every time state changes, the component re-renders too.

<br>

Firstly, we have to initialize the state object in the constructor method.

<br>

![reactstate](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g84e2lrlzi15q4uyybgr.png)

<br>

The state is like a regular JavaScript object, so you can use as many properties as you like, and also different types of data as well. You can reach the state's value in your code in this way

```
{this.state.property}
```

<br>

![state](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e362jacn04hmxi9yyklh.png)

<br>

![preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/659x8ap7pwwnoa7pu5ha.png)

<br>

## Changing the State

<br>

What if we wanted to change the state and see the results instantly rendered? It is completely possible, and for this purpose, we will have to use a method called `this.setState()` wherein between the brackets we should put the object with states attributes that we want to change.

<br>

![changincounter](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9z7kyzz2dtxz23qjy9ue.png)

<br>

In our case, we add an additional element `<button>` with `onClick` method (do not forget about camelCase), which calls increaseCounter method. Then in `increaseCounter` method, we use `this.setState()` function, plus something that was not mentioned yes is using also an additional built-in parameter called `prevState`. We have to use `prevState` to know what was the previous state and then update it properly. Always use `this.setState()` function to change the state, as it is a part of **lifecycle** method and will always rerender the component.

<br>

![preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ve64mf5tpuqto1kgx1yu.png)

<br>

## Lifecycle

<br>

Every React component has three lifecycles, which lets us manipulate each component in different ways.

<br>

1. **Mounting**
2. **Updating**
3. **Unmounting**

<br>

Each of these lifecycles has many methods which can be called in order. As it is a bit complex topic, it is constantly updated, approaches are changing, and it can go very deep and complex I will not dwell upon this subject more in this article. I just wanted you to be aware of this fact, and if you want to dig down the rabbit hole follow this [link](https://reactjs.org/docs/state-and-lifecycle.html).

<br>

## Events

<br>

Components, JSX, state and props give us a lot of possibilities, we also have lifecycles and everything packed together can help us make very complex applications. Most of the time, we will also want to make our applications reactive to user's input. The simplest example was the update button in our Element component which was updating the state's counter and then rerendering the component and we could see the result.

<br>

You can add events' handlers to each element in JSX in a very similar way as it takes places in HTML, however, you must remember about camelCase. Another thing is using arrow functions and binding `this` which represents the component owning the method. **Keyword this refers to the object that called the method**, and arrow functions always represent the object the object that defined the arrow function. That is why it is easier to use the arrow function as methods in React components. However, if we really have to use regular functions, which in fact have a bit different behaviour. Keyword `this` will be undefined in that case, so we have to use `bind()` method in **constructor** firstly.

<br>

![methods](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2bu4293ou8hpxm5kbbjy.png)

<br>

## Styling with CSS

<br>

At last, let us also add some style to our React application. There are many ways of changing the style, but the most common ones are adding **inline styling** and importing **CSS stylesheet**.

<br>

The first method is very similar to using HTML style attributes with a few differences. We should keep our style in form of the JavaScript object, so we will need to put it in double curly braces. The first one is a JavaScript expression, the second one is a JavaScript object.

<br>

![inlinestyling](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/66sqvead8cxhkwort64b.png)

<br>

![styled](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kegsigv11168vrc3412q.png)

<br>

We can also create a .css stylesheet file, and import it into the component.

<br>

![stylesheet](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/idvjqengw0g1s816lomc.png)

<br>

![appjs](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fx5ukgn1f9me169ia5b1.png)

<br>

### Result

<br>

![result](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4z2muna401l7fxvqby3i.png)

<br>

## Conclusion

<br>

That is all for this part, we just barely scratched the surface of React. Hopefully, this tutorial was not too complex for you and helped you to get the idea of what is React and how it works. If you want to keep on learning more about React, there is still a long way in front of you. This article should give you at least some foundations, so now you can start your journey with React.
