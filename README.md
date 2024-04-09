# w18-Social-Network

A social network plugin utilizing NoSQL

## Description

This project is a social network web application running as a server-side API to keep track of users, their thoughts 
and reactions.

## Installation

Firstly, please ensure that you extract this API application in a directory where you have the required permissions. The
prerequisites for installation include having Node.js and MongoDB installed and configured on your machine.

Once that is accomplished, simply execute `npm install` to install the necessary dependencies. After successful
installation, you can initialize the application by typing `npm start`. This streamlined process involves no special or
extraordinary steps, making it user-friendly and straightforward to get the application up and running.

## Usage



A video demonstration can be seen here:

## User Story

```text
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```text
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Future Development

In the future, I would like to take the time to 
