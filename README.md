#LocusJS
##Description

Web application designing and controlling in telemetric support process of oil and gas well thunks drilling.
This application allows create project profile trunks of drilling wells, add meteraged points of telemetrical equipments,
to calculate the spatial position point of meterage, to perform quality control an actual profile of trunk.

##Architecture

This application based on the AngularJS technology and consist of two parts: server and client.
Server part of LocusJS implevented trought web service, accessible RESTfull API.
Client part of LocusJS is Single Page Application (SPA), implemented how RESTfull client.

##Directory Structure

TBD

## Using the application

Install grunt
~~~
npm install -g grunt-cli
~~~

And then be sure to install everything that the repo requires:
~~~
npm install
bower install
~~~

### Development Mode

Run the following command to start the server
~~~
grunt server
~~~

Then run this to watch the files and update assets
~~~
grunt
~~~

You can now access the website at
`http://localhost:8888`

##Resources And Technologies

- [AngularJS](http://angularjs.org/ "AngularJS")
- [Bootsrtap](http://getbootstrap.com/ "Bootstrap")
- [NodeJS](http://nodejs.org/ "NodeJS")
- [Bower](http://bower.io/ "Bower")
- [Grunt](http://gruntjs.com/ "Grunt")

