# Sample NodeJS app with Postgres 

A sample backend application created using nodeJS and Express with PostgreSQL as the database.

**Tech Stack/Tools :** NodeJS, Typescript, Express, Mocha, Chai, PostgreSQL, Postman/Thunderclient, VS code

## How to run the source code

- Clone the source code in your local machine using below command

    `git clone https://github.com/mussadiqbasha/NodePostgresSample.git`

- Run the below command to install all the dependencies

    `npm install`

- To configure the database in postres, follow the below steps

    - Create database (can use psql or pgAdmin)

        `CREATE DATABASE test`
    
    - Create the table by executing the script available in below location 

        `scripts\createTable`
    
    - Configure the database connection in `connection.ts` file

        ![image](https://user-images.githubusercontent.com/59549298/194595174-07c4b050-86f8-401f-b608-2155c08ff669.png)

- Run the application using the below cammand

    `npm run dev`

- Run the test cases using the below cammand

    `npm run test`

## How to test the services


When the application is up and running, RESTful services can be tested using Postman or ThunderClient.

- POST request to insert the data

    Endpoint: http://localhost:6060/checkout

    ![image](https://user-images.githubusercontent.com/59549298/194688665-aeea2130-0f7c-474e-8146-21cc92ca7186.png)

    Sample input data can be found in location  `scripts\sampledata`

    Data inserted into Product table in test database in PostgreSQL

    ![image](https://user-images.githubusercontent.com/59549298/194688811-4f6cc8e5-d116-4759-af1a-20aa5b641550.png)

- GET request to fetch all the data

    Endpoint: http://localhost:6060/product

    ![image](https://user-images.githubusercontent.com/59549298/194689474-be7085e0-2daa-4961-8426-5c28229185be.png)


## Run the unit test cases

- Run the below command to execute the test cases written using Mocha and chai testing frameworks.

    `npm run test`

    ![image](https://user-images.githubusercontent.com/59549298/194689692-d9435b6e-6ee2-4929-a175-f56b3686e720.png)



    