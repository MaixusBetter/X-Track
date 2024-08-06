 # X-Track: Note Taking Buddy

## Description
X-Tracker is a web application designed to help small business owners organize  their tasks, and thoughts in one  place.

 Version: 1.0.0
 License: MIT

 Dependencies:
   - body-parser: ^1.20.2
   - express: ^4.19.2
   - express-handlebars: ^7.1.3
   - express-session: ^1.18.0
   - method-override: ^3.0.0
   - moment: ^2.30.1
   - pg: ^8.12.0
   - pg-hstore: ^2.3.4
   - sequelize: ^6.37.3
   - dotenv: ^16.4.5"
   - heroku: ^9.0.0
   - uuid: ^10.0.0

 ## Installation
 To run MaixusGig locally, follow these steps:
 
 1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd X-Track_Notetaker
    ```
 
 2. Install dependencies:
    ```bash
    npm install
    ```
 
 3. Start the application:
    ```bash
    nodemon server.js
    ```
    This will start the server at `http://localhost:3004`.
 
 ## Usage
 - Navigate to `http://localhost:3004` in your web browser to use the application.
 - Start writing notes by using the the Note Title, and Note Text fields.
 - If Unsatisfied with the content of your note, it can be cleared with the Clear Form button at any time.
 - Once both Ffields are filled click the Save Note button to add it to your list on the sidebar.
 - To access a not simply click on its title as displayed on the sidebar.
 - To delete a note, click the delete button next to the note you want to delete.

![Screenshot](./public/assets/img/Screenshot%202024-08-06%20105104.png)

 ## Link to Deployed App

 
 ## Credits
 - Author: Xavier Mendoza
 - University of Toronto
 
 ## License
 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Mozilla
 This project is licensed under the MIT License - see the LICENSE file for details.
