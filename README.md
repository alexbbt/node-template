Node Template
=======

**This is a simple template for any node application.**
This application will run as is.

Just download the **[zip file](https://github.com/alexbbt/node-template/archive/master.zip)**, then modify to your liking.

All I ask is that you give me credit for the template in your final code.

TODO:

`./config/config.js`

1. Specify Database Config 

`./app/database.js`

1. Load all Database Modules 
2. Connect to Database and Check for errors 
3. Setup 'public' database functions 
4. Setup 'private' database functions 

`./config/passport.js`

1. Load passport strategies 
2. Start stratagies

`./app/routes.js`

1. Setup additional routes 

Before Running the server please run `$ npm install` in the root directory.

When adding a new module remember to add it to the dependency list

example: `$ npm install mysql --save`