# Express Application
Hosted on localhost:8080

1. Step 1: `npm init` (create package.json)
2. Step 2: `npm i express`
3. Step 3: create index.js
4. Step 4: inside index.js use express to manage routes and return following
    ```javascript
    const express = require('express');
    const path = require('path');``
    const expressApp = express();``
    expressApp.set("views", path.join(__dirname, "views"));

5. Step 5: run `npm i ejs` (to install ejs library)
6. Step 6: Create Shared ejs files
7. Step 7: Create other ejs file for each page and include the shared ejs files (eg: navBar and footer)
8. (Optional) Step 8: inside indexJs use static public folder for managing external Js and CSS for frontend 
    ```javascript
    expressApp.use(express.static("public"));
9. Step 9. Run the application `node index.js`

# Shared Layouts

1. Navigation Bar
2. Footer with contactdetails


## Main Page: http://localhost:8080/
Loads up the main page

## Education: http://localhost:8080/education
Loads up the Education

## Experience: http://localhost:8080/experience
Loads up the Experience

## Contact: http://localhost:8080/contact
Loads up the Contact us page





All pages should have Restaurant Name, and footer with the company email

5. Step 5: `node index.js` Run this command to render the index.js file