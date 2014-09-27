Angular Test
============

Hello and welcome!

You are provided with the current repository (https://github.com/IvanFarms/test) which is published to http://test.ivanfarms.com/, and with an API server by http://test.ivanfarms.com/api. 

Your task is to integrate the two following pages with angular:

The folowing use cases should be covered:
- the main page (home) is
- click on signup openn the signup page and the user can enter details
- on user signup page, cancel return to the main page and do nothing
- after the name is entered, an API call is made to GET /user/&name=... if the call is return an object, an error message must be displayed (name already registered) 
- on user signup page, ok creates the user by an API call of the form POST /createUser with data provided in json
- click on signin opens the signin page and ask for the details
- on user signin page, cancel return to the main page and do nothing
- on user signin page, ok launch an API call of the form GET /user with data provided in json and you should go back to the usersignup page and display the user data that could be edited and updated through a call to PUT /user (instead of the POST /creatuser when no user is found.

You should create a relevant angulat modular architecture which would be able to handle new functions (routes).

You shouldn't change any of the current sub-directory (css, js, images, fonts). You should add a specific directory to store the angular files.

Once your app works locally,
