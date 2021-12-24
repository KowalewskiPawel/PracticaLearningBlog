---
title: "Increase Your Productivity with YouTube and a Few Lines of JS Code"
date: "May 15 2021"
excerpt: "YouTube is a great platform that allows us to find information nearly about anything. Unfortunately, it is also a huge time waster as it can easily distract us with the proposed content or with the ads. What if we still want to use it in a possibly most productive way, without paying anything extra for subscription or premium extensions to your browser? There is a very simple solution to that problem! You can get rid of both ads and distracting content with just a few lines of code*. This tutorial will be focused on Firefox Web Browser, but you can still apply nearly the same techniques in different web browsers."
cover_image: "/assets/posts/youtube_ads.jpg"
---

YouTube is a great platform that allows us to find information nearly about anything. Unfortunately, it is also a huge time waster as it can easily distract us with the proposed content or with the ads. What if we still want to use it in a possibly most productive way, without paying anything extra for subscription or premium extensions to your browser? There is a very simple solution to that problem! You can get rid of both ads and distracting content with just a few lines of code\*.

<br>

- This tutorial will be focused on Firefox Web Browser, but you can still apply nearly the same techniques in different web browsers.

<br>

## Web Browser Extension

<br>

What is it? Most of the popular web browsers let us add extra plugins in other words called extensions. Just like you can guess, those are additional scripts that can run in the background on the selected websites or any website. In our case, we will want the script to run just when we visit YouTube. Before we move on to create the extension itself, we have to deconstruct the problem.

<br>

# YouTube

<br>

First of all, when we visit the main page of YouTube, you will see a huge grid with dozens of recommended videos that can catch our attention and sometimes even very easily take us to the very wrong places ;) Let's get rid of that element first. Go to YouTube main page, and click on settings => Web Developer => Web Developer Tools or simply `CTRL+SHIFT+I`, then click on the "Pick an element" button or `CTRL+SHIFT+C`. It will let you simply hover over the given items on the website and find them easily in the code. The next step is to find some special tag name, id or class attribute of the given element so that we can hide it. Those class names and ids may change over time, so it is better to check it yourself what is the exact name at the time. In my case, at the time of writing this article, the element with a grid has a tag name name called _ytd-rich-grid-renderer_. Then, click on the console tab `(CTRL+SHIFT+K)` and write the following line of code

```
document.querySelector("ytd-rich-grid-renderer").style.display = 'none';
```

click enter and the grid element shouldn't be visible anymore.

<br>

## Ads

<br>

OK, so in the previous part we found a way how to get rid of the grid element, but what about ads? As you know, every ad needs a skip button, but this button may not be clickable for at least the first 5 seconds. There is another trick for this problem. You can also inspect the video player and you will quickly find out that this button is always there, but it is hidden for some amount of time. We do not need to see it even, using DOM manipulation we can click it without showing it. At the time of writing this article, that button has a class name of _ytp-ad-skip-button_, so each time when you see the ad you can open the console and call the following line of code

```
document.querySelector(".ytp-ad-skip-button").click();
```

The ads are gone, but we still have the recommended videos on the side visible. The procedure for removing it is very similar to removing the grid, so if you go to the console and input the following line of code

```
document.querySelector("#secondary-inner").style.display = "none";
```

the recommended videos bar should be gone.

<br>

Everything works as it should. However, we still need to call all of the actions over and over again, and in the end, it takes even more time than watching the ads. At this moment we have to find a way to automatize this process and extensions will be helpful here. From that moment, I will strictly follow the way of creating the extension for Firefox, but for Chrome the process looks very similar. So first of all, create a new folder and name it as you wish, then inside of this folder create two files

<br>

1. manifest.json
2. script.js

<br>

Open manifest.json with VS Code or any other code editor, it could be even notepad. Inside of this file, we will have to create a JSON object with a minimum of following attributes:

<br>

```
{
  "manifest_version": 2,
  "name": "nameForYourExtension",
  "version": "1.0",

  "description": "Removes ads and recommended videos from YouTube",

  "content_scripts": [
    {
      "matches": ["*://*.youtube.com/*"],
      "js": ["script.js"]
    }
  ]
}
```

<br>

Inside of the manifest.json, we firstly match the address on which our script will be run and in the second line we link the file with JavaScript code.

<br>

That is all for manifest.json, now let's move on to the script.js file which should look something like that:

<br>

```
setInterval(() => {
  (async function () {
    const skipBtn = await document.querySelector(".ytp-ad-skip-button");
    skipBtn.click();
  })();

  (async function () {
    const grid = await document.querySelector(
      "ytd-rich-grid-renderer"
    );
    grid.style.display = "none";
  })();

  (async function () {
    const side = await document.querySelector("#secondary-inner");
    side.style.display = "none";
  })();
}, 500);
```

<br>

As you can see we will set an interval which will be called every 500 milliseconds when we are browsing YouTube, inside this code we have 3 IFFE async functions, each one responsible for a separate element. Code is quite straightforward, we use async functions, as sometimes some elements may load later, so just to be on the safe side it is better to wait for the given element to load. Once we have it, we can execute a DOM query on each of them.

<br>

Now it is time to test our new extension, go to Firefox and click on settings => Add-ons Manager `(CTRL+SHIFT+A)`, click on the gear button and select option Debug Add-ons. Then you will see a new tab with a button called "Load Temporary Add-on". Click on that button, go to the folder where you have created your add-on and open the manifest.json file. Everything should work by now, and each time you open YouTube ads and recommended videos should be gone! :) The only problem now is that, since it is not an official and approved add-on for Firefox, you will have to repeat that temporary add-on procedure each time you open firefox. Deploying add-ons to firefox is free, so you feel free to create an account and publish your extension.

<br>

## Summary

<br>

Now you can enjoy your "free YouTube subscription" as long as you like :D There are unfortunately some drawbacks, as even if you publish it to firefox the add-on may stop working one day due to new class names or other updates, another thing is that it won't work with official YouTube apps. Feel free to modify the code as much as you like or even add new features. Before we finish, let's answer one more potential question: why do we even bother when there are plenty of add-ons already available? There are two reasons, first for the learning purposes and having the satisfaction of creating your own add-on, the second one is security issues as we shouldn't trust every add-on since these days we can never be sure what is inside of the code.
