Angular Test
============

Hello and welcome!

You are provided with the current repository (https://github.com/IvanFarms/test) which is published to http://test.ivanfarms.com/, and with an API server at http://test.ivanfarms.com/api. 

Your task is to integrate the three following pages with angular: home.html, signin.html, signup.html

The folowing use cases should be covered:
- the landing home page is home.html
- on the home page, clicking on "sign up" opens the signup page where the user can enter details
- on the signup page, back return to the main page and do nothing
- on the signup page, after the name (say xxx) is entered, an API call is made to GET /user/&name=xxx. if the call returns an object, a message is displayed immediately "name xxx is already registered"
- on the signup page, clicking on "sign up" launch an API call of the form POST /createUser with data provided in json format; if the call returns an error, the message is display and the user stays on the page. Otherwise, got back to the home page.
- on the home page, clicking on "sign in" opens the signin page 
- on the signin page, back returns to the main page and do nothing
- on the signin page, clicking on "sign in" launchs an API call of the form POST /verifyUser with email and password provided in json 
   - If the verifyUser call returns true and a token, the user is redirect to the signup page and a call to GET /user/email retrieves the corresponding data. name and password can be edited and updated through a call to PUT /user/email (instead of the POST /createUser when the user doesn't exists). The email cannot be changed.
   - if the verifyUser call returns false, the user stays and a message "Incorrect email or password is displayed".

The following API calls are provided:

    GET /user/<email> returns { "name": "...", "email": "...", "code": 123} or false
    GET /user/?name=xxx returns { "name": "...", "email": "...", "code": 123} or false
    PUT /user/<email> returns true or false
    POST createUser { "name": "...", "email": "...", "code": 123} returns { "error": true/false, "message": "..."}
    POST verifyUser { "email": "...", "code": 123} returns true or false

You should create a relevant angulat modular architecture which would be able to handle new functions (routes).

You shouldn't change any of the current sub-directory (css, js, images, fonts). You should add a specific directory to store the angular files.

Once your app works locally, creates a branch and a pull request with your name.

Happy coding!
