# Challenge 2

In this challenge I've created a simple application that simulates a system to a baber shop, where the user can schedule a haircut with one barber and see the available hours of a specific barber.  
This system use an common architecture in **MVC** style, using **nunjucks** to create the views in the **server side**.  
**Sequelize** was used to abstract the usage of the database

# Running the server

First install de dependecies, you can use `yarn` or `npm`. Run the following commands.  
`yarn install` - Install the dependecies  
`yarn start-dev` - Start the server in the development mode (using nodemon)  
`yarn start` - Start the server (without nodemon)

# Routes from GoBarber

#### http://localhost:3000/

-   [GET]

The default route, with two input boxes, **one** with the **e-mail** from the user and the **second** with the **password**.  
Besides the user can click in two buttons, one to create a new account and the second where the user can login in the system.

#### http://localhost:3000/signup

-   [GET]

The route where the user can create a new account, inserting the **name**, **mail** and **password** and a checkbox where he can say if he is a barber or not.  
The user can upload a picture, by clicking in the image.

-   [POST]

Upload the user data to the server and store it in the database.  
The user avatar is saved in `path-to-project/temp/uploads`, only the name of the picture is saved in the DB.

#### http://localhost:3000/signin

-   [POST]

Make the user authentication and store the session of the user in the `path-to-project/temp/sessions`.

#### http://localhost:3000/app

All routes below the **/app** need to be authenticated, otherwise the user is redirected to the route **/**.

#### http://localhost:3000/app/dashboard

-   [GET]

Return to the user the view with all barbers registered in the system.

#### http://localhost:3000/app/appointments/new/<provider_id>

-   [GET]

Return the available hours of a specific barber given a specific date, here the user can choose a specific day.

-   [POST]

Save in the database that the logged user is going to have scheduled a haircut with a specific barber.

#### http://localhost:3000/app/available/<provider_id>

-   [GET]

Return the rendered html of the available hours of a specific barber.

#### http://localhost:3000/files/<file_name>

-   [GET]

Returns the requested file

# Stack

This challenge was created using `nodeJS`, and using the libs `expressJS`, `nunjucks` and `sequelize`.  
To store the data was used `PostgreSQL` running inside a docker container.  
To install the docker container you can run 

`docker run --name database -p 5432:5432 -d -t kartoza/postgis`

To run the migrations you can run

`npx sequelize db:migrate` or `node_modules/.bin/sequelize db:migrate`
