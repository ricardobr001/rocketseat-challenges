# Challenge 1

In this challenge I've created a simple server that check if the user age is greater than 18 and return to him that he is an adult or not.

# Running the server

First install de dependecies, you can use `yarn` or `npm`. Run the following commands. 
`yarn install` - Install the dependecies 
`yarn start-dev` - Start the server in the development mode (using  nodemon) 
`yarn start` - Start the server (without nodemon)

# Routes

### http://localhost:3000/

The default route, with an input box asking the user age.

### http://localhost:3000/check

The route that checks if the user have inserted the age greater than 18 and redirect the user to the major or minor age route (view).

### http://localhost:3000/major

The route using an middleware that checks if the age passed in the URL have a value or not. 
And show the view to the user with the message that he's an adult.

### http://localhost:3000/minor

The route using an middleware that checks if the age passed in the URL have a value or not. 
And show the view to the user with the message that he isn't an adult.

# Stack

This challenge was created using `nodeJS`, and using the libs `expressJS` and `nunjucks`.