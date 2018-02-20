# React-Node-Starter-Kit-2018

So I built this full stack starter kit for web developers using both Node with Create-React-App/Redux on the front end... The goal is to save you time from setting up a backend, user model, and user authentication. Passport-local and bcryptjs are used together to pull the user info and hash the password. Reducers are already set up for the global state of users and an admin reducer to show all users in the global state. A navbar component is already set up with both login and register forms created to handle the dispatch actions to the backend which will create a new user and login a user. Sass/SCSS compiler script and package already setup as well

I broke it down in simple steps to get you going.

**Steps**
---------

**Download or Pull This Repo**:
	Top of this page you can see where it says clone or download

 **Install Node**:
	https://nodejs.org/en/

**Install Nodemon globally or local**:
If global install for future use of nodemon use [-g] in command. If using local then run in root project folder

  npm install -g nodemon || npm install nodemon

 **Install node and express packages**:
On the root of this project run on your terminal (if you want you can do this with yarn but thats optional)
    
    npm install
    

**Install client side packages**:
Install client folder packages by running npm install inside the client folder

  cd client
  npm install

 **Create env file[dev.js] in config folder**:
Two essential keys that need to be created is the mongodb or mlab connection path and a self-created cookie key which can be any character string of choice like what I input for the value. DO NOT FORGET to add file to .gitignore file so keys will not be shown to others
    
    module.exports = {
      mongoURI: '',
      cookieKey: 'utoirjlkgfjldjfldgljgldjgldfjgldf'
    };


**Start both Express server and React**

  npm run dev

**Start sass/scss compiler**:
Create second terminal window to run compiler

  npm run build-css