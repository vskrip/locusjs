#LocusJS Server
##Install Node Modules

Server part of locusjs application used express and mysql node modules.
For their installation the next command in terminal nessesary :

~~~
cd /Library/WebServer/Documents/locusjs/server
npm install express
npm install mysql
~~~

##Testing the API using cURL

List of the something items in database throught REST API can be achieve with next url on browser

http://localhost:3000/projects

You will only be able to test our GET services that way.
A more versatile solution to test RESTful services is to use cURL, a command 
line utility for transferring data with URL syntax.

For example, using cURL, you can test the LocusJs API with the following commands:

Get all projects:
curl -i -X GET http://localhost:3000/projects

Get project with _id value of 1 (use a value that exists in your database):
curl -i -X GET http://localhost:3000/projects/1

Delete project with _id value of 4:
curl -i -X DELETE http://localhost:3000/projects/4

Add a new project:
curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "New Wine", "year": "2009"}' http://localhost:3000/projects

Modify project with _id value of 4:
curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "New Wine", "year": "2010"}' http://localhost:3000/projects/4