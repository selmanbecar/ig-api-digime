# Intro 
 - This app is made for Digi.me company for Junior competition
 - Application have all requirements that need
 - First of all and most important application use Instagram api to get data. 
 - Application have two routes. One which provides username and post count and other that provides media picture and date when it was created.
 - For logged in user aplication display all requirements.
 - All backend code is cover and ready to use on frontend.
 - App have 2 test unit which you can run as described below.

# Prerequisites 
 - Visual studio code or some other text editor
 - All files included
 - Terminal (cmd) to run projects
 - "dependencies": {
    "@types/express": "^4.17.9",
     "@types/jasmine": "^3.6.2",
    "@types/request": "^2.48.5",
    "express": "^4.17.1",
    "jasmine": "^3.6.3",
    "jasmine-ts-console-reporter": "^3.1.1",
    "request": "^2.88.2",
    "typescript": "^4.1.2"
  }
  - Instagram user_id (I set mine in "lib>model>config.ts")
  - Instagram access token (I set mine in "lib>model>config.ts")
  -Internet conection
  - To install dependencies type in terminal "npm install 'dependencies name'"

# how to run - start 
* Local
 - To run this app if you have all prerquisites, type "node lib/app.js" in terminal
 - You will get message Server is listening on port
 - Go to web browser and type http://localhost:3000/ (for user information) and http://localhost:3000/media for (user media)
# How to run unit tests 
- This app has two unit test for two routes "/" and "/media"
- To run unit test you have to start program like it describe in "# how to run - start" section. Then open another Terminal window and type "jasmine" if you get message like this https://ibb.co/KXmMLCt your test is success.

# Postman
- I make postman collection with this routes and you can download it on this link
https://we.tl/t-kqk0ibWCcm

# How to get user_id and access_token
- Instagram have limitations that which allow us to only read data. But for that we must use access_token, user_id and you must be test user if Instagram is not allowed your aplication.
- All information about how you can get access_token (short or long time token) have on this link that I find like most useful https://levelup.gitconnected.com/getting-started-with-the-instagram-basic-display-api-5124c92c4935
- Access token and user id you can use in my app to get your data just change user_id and instagram_token in "lib>model>config.ts".
