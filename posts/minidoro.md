---
title: "Minidoro Clock - React Native Project with FCC Background"
date: "March 11 2021"
excerpt: "Let's be honest, most of us have heard of Pomodoro Technique, I bet that most of you readers also use it on a daily basis and probably a huge part of you made your own version as a project. So what is the matter? Those familiar with FCC curriculum know that project where you have to build your own version of a 25 + 5 clock, and it is where this whole story started."
cover_image: "/assets/posts/minidoro_clock.jpg"
---

This time it won't be a technical explanation, but rather a personal story with a few tips about the differences between React and React Native.

<br>

## Pomodoro Technique 🍅

<br>

Let's be honest, most of us have heard of Pomodoro Technique, I bet that most of you readers also use it on a daily basis and probably a huge part of you made your own version as a project. So what is the matter? Those familiar with FCC curriculum know that project where you have to build your own version of a 25 + 5 clock, and it is where this whole story started.

<br>

## The Beginning

<br>

It took me months, to finally get to that section. Each time when in vanilla JS things were starting to make sense, in React everything looked so complicated. Despite the obvious fact of React advantages, there was also React Native. A legendary framework, based on JS that lets you write mobile applications using native modules. Written once in JavaScript and compiled at the same time to both Android and iOS, sounds cool? There are of course some drawbacks, but I will not discuss them here.

<br>

After finishing FCC projects, I was thinking how can I rebuild one of the projects from scratch, add some simple features and also make it at least partly meaningful for other people. Rebuilding something in your own way lets you also revise all of the things you have learned up to a certain point. The best part of building projects from scratch is that you often find yourself coming up with very interesting solutions, different from what you learned during the tutorials. It is the essence of programming, one problem - countless solutions, and one of them can be yours. This is of course positive approach, and all of you who have some experience with these kinds of projects, know how frustrating it can be sometimes. Especially when you make something that supposed to be simple, but you still struggle with a simple piece of code.

<br>

## All right, so what is Minidoro Clock?

<br>

Most of us care a lot about money, we are afraid of losing it and always think how to spend it or invest it right, but what about our time? There are millions of time-consuming, entertainment apps, but not as many for organizing our time. In a world full of distractions I believe that minimalism and organizing our time well should be on the top of our priority list. This is how Mindoro Clock came to my mind. Minidoro is an application where minimalism meets the Pomodoro Technique. Super simple UI and just necessary options, help us organize our time more productively.

<br>

Minidoro is a simple application written in React Native, it is free and there are no advertisements. It is also open-source, so everyone can give their feedback and suggestions, or even contribute to the code of the application.

<br>

## React + React Native

<br>

Most probably, you can guess that the project React app, became a product landing website, to later evolve to a React Native application. The project is very simple, it barely touches some more advanced sides of React, but thanks to its simplicity it really helped me to revisit all of the core ideas behind React. Another thing is deployment, during tutorials we very rarely touch this topic, but how will other people reach your websites and applications?

<br>

The first step was to make a fully functional web version of the app, commit the code to GitHub and deploy it to Netlify. Up to this point, everything went quite smooth. It was time to convert the React app to its React Native equivalent.

<br>

#Silence before the storm

<br>

Nothing could go wrong, overall I already had some experience with React, web development, and even some Java experience. Unfortunately, if you think that knowing all of the things above, will make your way to writing or let's say converting React apps to React Native super easy, you may be surprised. Let's make things clear, React and React Native are very similar but not the same since React mainly is meant to run in web browsers, it is just a library that runs in a Java Script environment, where React Native is a hybrid framework for running JavaScript code as a layer on a different language.

<br>

## JSX is not the same anymore

<br>

One of the first and main differences between React and React Native is that HTML like tags that we know from React JSX won't work with React Native. Instead, you should think of each component in JSX as a native module. Also, events are not the same, for example, there is no such thing as `onClick` but `onPress` instead, which indeed has a bit different behaviour. The same goes for modules, and even though some of the React modules are compatible with React Native, most of the time you will find yourself looking for a corresponding library. Because of the different behaviour of mobile devices, many modules use a lot of asynchronous functions, so if you feel rusty in this topic I recommend you to revise it before putting your hands on React Native. In the end, the environment in which we build our React Native applications is not that obvious choice, as it used to be with regular React. At this point, I can only say that if you do not have any experience with Xcode or Android Studio - Expo may be the best decision.

<br>

## What next?

<br>

In conclusion, redesigning React applications for React Native may not be as easy and obvious as you may think. There are a lot of things to consider, which were done somehow behind the scenes for us in the web browsers. In my case, I used Expo and haven't even touched code in Java. However, it doesn't mean that when you write React Native applications you never have to think about native code. There are many cases where React Native code, will be just a part and touch the native code may still be a must. If you want the check out my application - Minidoro Clock you can find it [here](https://minidoroclock.netlify.app/)

<br>

Please let me know if you have any questions, suggestions or found some bugs.
