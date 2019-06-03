# propman
Propman is a property management app that helps property owners manage their property.  Currently property owners can only create, get and update properties.
## Installation
To run this app on your local machine, you must have Meteor installed;
1.	Clone this repo
2.	cd to cloned repo
3.	install packages and dependencies
4.	start meteor
5.	visit app on locallhost :3000/
## Basic Usage
The endpoints in this app were created using Restivus, a basic interface for creating REST APIs in Meteor.
You can install Restivus using meteor add nimble:restivus
###### POST :  ‘/api/users’
Users can be added to the application using the above endpoint. The only fields required to create a new 
user are, “username”,  “email’’, ‘’password’’ and ‘’profile’’ for user meta data.
```
Post request example
{
“username”: “test”
  "email": "test@mtest.com",
  "password": "password",
  "profile": {
    "firstName": "test",
    "lastName": "test"
  }
}
```
```
Response data
Status code: 201
{
  "status": "success",
  "data": {
    "_id": "oFpdgAMMr7F5A7P3a",
    "profile": {
      "firstName": "Jack",
      "lastName": "Rose"
    }
  }
}
}
```
**Logging in 
###### POST: ‘/api/login’
The login endpoint requires the following parameters in the request body to authenticate users, a combo of either username and password or email and password. It returns a userId and authToken which must be saved and included in subsequent request.
Response data
{ status: "success", data: {authToken: "f2KpRW7KeN9aPmjSZ", userId: fbdpsNf4oHiX79vMJ} }

**Logging Out
###### POST /api/logout 
The  POST /api/logout endpoint is for logging a user out. If successful, the auth token that is passed in the request header will be invalidated (removed from the user account), so it will not work in any subsequent requests
**Creating property
######POST:  ‘/api/properties’
The POST ‘/api/properties’ is used to create a new property. It requires the new property credentials on the request body to create a new property. This must be preceded with  an authToken and userId  passed in the request header under the following headers;
•	X-User-Id
•	X-Auth-Token.
**Updating property
###### PUT:  ‘/api/properties/:id’
The ‘/api/properties/:id’ endpoint also requires the property credentials in the request body, and must likewise be preceded with an authToken and userId in the request header as specified above.
**Getting properties 
###### GET :  ‘/api/users/:userId/properties’
This endpoint returns all the properties  associated with a user. And only needs the userId included as a route parameter.

