# Candidate application platform assignment

This is a candidate application platform having filter options based on various criteria and infinite scroll.

This App is built using [React](https://github.com/facebook/react) and [TypeScript](https://github.com/microsoft/TypeScript) with [Vite](https://github.com/vitejs/vite).

# Table of contents

- [Installation and Project Run](#installation-and-project-run)
- [Getting Started](#getting-started)
- [Available npm scripts](#available-scripts)
- [Coding Standards](#coding-standards)
- [Contact](#contact)

## Installation and Project Run

1. Use **npm i** command to install all the required packages and 
2. Use **npm run dev** to run the app in the development mode.

**Note** : You don't need to install anything seperately.

## Getting Started

Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits, you will also see any lint errors in the console.

## Available Scripts

In the project directory, you can run the following scripts:

**Note**: Following commands and scripts will only runs on linux bash not on other OS native cli's.

| Command                               | Description                                                               |
| ------------------------------------- | ------------------------------------------------------------------------- |
| **npm run dev**               | Runs the app on 4000 port .                      |
| **npm run build**        | Builds the app and creates a minified dist file for deployment                       |
| **npm run preview**    | Opens the app in preview mode after the build                 |

### Features

1. Filter Functionality
2. Infinite scroll feature
3. Responsive design

### Coding Standards

**Use Interfaces**: Define interfaces for props and state to enforce type safety and improve code readability. Interfaces should accurately describe the shape of the data being passed between components.

**Type Annotations**: Explicitly annotate types for props, state, and variables whenever possible. This helps catch type errors early in development and improves code maintainability.

**Avoid 'any' Type**: Minimize the use of the any type as much as possible. Instead, use specific types or union types to accurately represent the data being used in your components.

**Destructuring Props**: Destructure props in function components to improve readability and avoid repetition. This makes it clear which props are being used within the component.

**Use React.FC**: Use React.FC (Function Component) type when defining functional components. This provides built-in support for specifying props and children types and improves code clarity.

These standards help ensure consistency, maintainability, and type safety in TypeScript React projects.

### Contact

Riya Mehere - [rmehere23@gmail.com](rmehere23@gmail.com)
