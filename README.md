# Project "Tweets Web Site" README

This project is a React-based web site that allows users to view a list of users and interact with
the number of followers. The project consists of two pages: "Home" and "Tweets".

## Встановлення та запуск проєкту

1. Clone the repository using the command:

### `git clone <URL репозиторію>`

2. Install dependencies by running the command:

### `npm install`

3. Start the project using the command:

### `npm start`

4. Open a web browser and go to [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

The project consists of the following files and directories:

- `public`: A directory that contains public files of the website, such as index.html and others.
- `src`: A directory that contains the source code of the React application.
- `components`: A directory that contains React components used on different pages.
- `pages`: A directory that contains React components representing individual website pages.
- `App.js`: The main React component that defines the routing and overall structure of the site.
- `index.js`: The entry point of the application where the main component is rendered.

## Page Descriptions

1. Home: This page provides general information about the website and its functionality. It serves
   as the starting point for navigating to the "Tweets" page.

2. Tweets: This page displays a list of users along with the number of followers for each. Users can
   click the "Go Back" button to return to the "Home" page. Additionally, each card has a button
   that, when clicked, subscribes to the user and increases the number of followers. Clicking again
   unsubscribes and decreases the number of followers. There is also a filter that allows filtering
   users, including those that have been subscribed to.

## Additional Information

- The project utilizes the React library for building the user interface.
- React Router library is used for page routing.
- Component styling is achieved using Styled Components.
