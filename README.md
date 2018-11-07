# Restaurant Reviews Project Part 1

## Table of Contents

* [Purpose](#purpose)
* [Instructions](#instructions)
* [Code Notes](#code-notes)
* [Contributing](#contributing)
* [Dependencies](#dependencies)
* [References & Credits](#references-&-credits)

## Purpose

This site integrates a map API from MapBox to display restaurant locations. It tracks the cuisine type, address and reviews for select restaurants (in a specified .json file). The key goals of the project are to create a responsive design that will work across many devices of varying display size, and also to begin using a service worker concept to provide better user experience (aka cache resources so that some data is still viewable even if offline).

## Instructions

Based on Udacity code, if running from a local machine, a local server is required. The following are instructions from Udacity to use a python server.

1. In this folder *[the root folder of the project files]*, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software. [**Important note:** *use Python 3. Udacity's instructions were incorrect above: do not use "python3 -m Simple....." use "python -m Simple..."*]

2. With your server running, visit the site: `http://localhost:8000`, assuming you started the server from the root folder of the project files, the main restaurant reviews page will display.

**Trouble-shooting**
If it appears there is something odd with the site, open the developer tools (assuming Chrome), go the the Application option, the item to Clear Storage, and click the Clear Site Data button. Then hold down the Ctrl key and click the browser refresh button.

**File List**

	+index.html
	restaurant.html
	readme.md
	sw.js
	css/styles.css
	data/restaurants.json
	img/1.jpg
	img/2.jpg
	img/3.jpg
	img/4.jpg
	img/5.jpg
	img/6.jpg
	img/7.jpg
	img/8.jpg
	img/9.jpg
	img/10.jpg
	js/dbhelper.js
	js/main.js
	js/restaurant_info.js
	js/swclass.js

## Code Notes

For responsive design, @media directives were used extensively in the css/styles.css file. For screen navigation, visual cues of focus, and ARIA "screen reader" functions, .html and .js files were extensively modified (use of the "tabindex", "aria-role", "aria-label", and other attributes). There were no specific instructions given on what should or should not receive focus for tab navigation, so an attempt was made to ignore some elements (tabindex = "-1") was made.


## Contributing

As this particular page is for a Udacity Nano degree program, no contributions will be accepted. No contributing instructions are provided

## Dependencies

No dependencies for frameworks or libraries are required. However, it is assumed the browser fully supports the ECMAScript 6 (ES6) "class" features.


## References & Credits

This project uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). The key used in the code is the author's personal key.

This project was cloned from https://github.com/udacity/frontend-nanodegree-arcade-game.git as per course instruction. The clone was modified to implement the required functionality.



