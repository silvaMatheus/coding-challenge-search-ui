[![Video Demonstration](/public/preview.png)](https://youtu.be/lTfzbdwtSiI "Search UI Code Challenge")

# Search UI Code Challenge - Submission

This repository contains my submission for the Search UI coding challenge, aimed at showcasing my proficiency in React and TypeScript. The primary objective of this challenge was to design and implement a simple yet functional search interface that allows users to explore financial topics efficiently. Throughout the development process, my goal was to not only meet the specified requirements but also to create a user experience that is intuitive, responsive, and accessible.

## Objective and Achievement

The challenge was to build a small application that demonstrates the ability to work with modern web technologies, particularly focusing on React and TypeScript. I aimed to create a search UI that provides users with quick and relevant results.

The resulting application meets all the outlined scenarios, a loading state during data retrieval, and a clear presentation of search results with the capability to open result URLs in a new tab. Special attention was given to marking each search result with its content type (video, playlist, or blog post), enhancing the user's ability to find the type of content they prefer.

## Development Process

The development process began with setting up the project structure and installing the necessary dependencies. Following best practices, I structured the application to separate concerns, making use of modular components and hooks for clean and maintainable code.

- **UI Design:** Utilized Tailwind CSS for styling to rapidly develop a clean and responsive layout. Radix UI components were integrated where accessibility was paramount.
- **State Management and Data Fetching:** Chose React Query for its powerful data synchronization capabilities, allowing the application to fetch, cache, and update the search data with minimal boilerplate code.
- **Testing:** Wrote unit tests using React Testing Library to ensure the reliability of the UI components, while Cypress was used for end-to-end testing to validate the application's functionality as a whole.

## Technologies Used

This project is built using a number of cutting-edge technologies and libraries:

- TypeScript for static type checking.
- Tailwind CSS for utility-first CSS styling.
- Radix UI for accessible UI components such as icons, scroll areas, slots, and toasts.
- React Query for fetching, caching, and updating asynchronous data.
- Cypress for end-to-end testing.

## Running the Project

After cloning the repository and navigating to the project directory, run the following commands:

- Install dependencies: `npm install`
- Start the development: `npm start`
  This command concurrently starts the React application and the Express server.
- Access the application: Open [http://localhost:3000](http://localhost:3000) to view the UI in the browser.

## Testing

This project is equipped with both unit and end-to-end testing frameworks:

- To run unit tests: `npm test`
- To execute end-to-end tests with Cypress: First, make sure the application is running, then execute `npx cypress open` for a GUI interface or `npx cypress run` for headless testing.
