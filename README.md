# Dawraty Education Group - Assignment

## Overview

In this project I have created an application that displays weather data for current location and also allows users to search for current weather information for a specific city.
The application interacts with a public weather API Open-Meteo(https://open-meteo.com), which provides information about weather for location based on given coordinates.

## Features

- **Main Screen:** This screen will display current weather data in the current location. This screen is divided into two parts:
  - **_Top Content:_** Here is the header of the view with displayed data like current weather condition, current location, date and time.
  - **_Bottom Content:_** Is a segmented component, where are data displayed for today, tomorrow and 7 incoming days.
- **Cities Screen:** In this screen users can search for a location in the list with autocomplete search, and navigate to the details screen where weather data are displayed. If there are no results an empty view will be shown.

## UI/UX - Figma

The app’s UI/UX design was created by me using Figma. The layout is clean and intuitive, with a focus on usability and aesthetics. Below there is a screenshot showing the design.

![screenshot](/Users/majlinda/Desktop/final-UI.png)

## Github Flow

- **Main Branch:** The production-ready branch that always contains stable code.
- **Development Branch:** A more stable branch where ongoing development occurs and new features are integrated.
- **Feature Branches:** Branches created from the development branch for specific features:

- `feature/main-screen`: UI implementation for the main screen.
- `feature/cities-list`: Adds a list of cities with related functionality.
- `feature/implement-api`: UI implementation for the main screen.
- `feature/general-improvements`: UI implementation for the main screen.

## Technology Used

- **Typescript:** The programming language used for app development.
- **Axios:** Library used for handling HTTP requests.
- **Lottie:** Used for animations, specifically for the loading indicator and empty view in this project.
- **React Native Elements:** Is a popular library which provides an all-in-one UI kit for creating apps in react native. There are many great ready to use components, like the search bar that I have used in my project.
- **Figma:** I have used this tool for creating UI, in order to have a view of what app will look like before starting the implementation.
- **Expo:** Expo is much more than just a set of libraries. It is an entire, extensive environment that allows you to conveniently create projects using the command line (Expo CLI), use tools to run applications on a virtual device (Expo Snack), or immediately test implemented changes on your own hardware (Expo Go).
- **React Native SVG:** A library used for rendering SVG images and icons in a React Native application, allowing for scalable and customizable graphics.
- **Zustand:** I have used Zustand for state management which is a lighter alternative for state management, in some of our smaller or simpler projects. Zustand is a much more minimalistic solution compared to Redux, and its simplicity makes it easier to work with.

## Architecture

Design pattern used in this project is the Atomic Design Pattern. Itn is a design principle that allows the splitting of UI code into smaller low level chunks (Components) and build it bottom-up to a fully functional page or application.

- **Atom:** If a particular component is the smallest possible unit in the application that can be used directly. For example, Title, as it cannot be broken down further but it can exist on its own.
- **Molecule:** If a collection of atoms or molecules form a single unit and there are chances that this unit will be re-used in other components again this is a Molecule.
- **Organisms:** Are groups of molecules and atoms that form a complete functional section of your application
- **Template:** It is a special component which acts like a placeholder to render a uniform looking page all across the application.

## Future Improvements

Since in this assignment I managed to display most of the requirements, I left something for future improvements because of the lack of information that I had from that open source API.

- **Countries List:** As this was not provided in the Open-Meteo API, I made a workaround by uploading a json file with a short list of cities with their details like name, longitude and latitude. This was intended to demonstrate the filtering, and navigation to details screen using those parameters. In the future it is a good practice to get this cities list from the backend and also implement pagination.
- **Icons:** Also icons for weather conditions are not displayed from the backend, but are only dummy data. It would be better if they are retrieved from the backend or create images locally based on weather conditions.

## Testing

I have made manual testing of the application in devices with different screen sizes to ensure layout is displayed properly in all devices. I have also implemented Unit Testing for three different cases.

- **Date Conversion:**: To ensure date is properly converted in a given format.
- **Table View Population:** To ensure dataSource has the expected number of items.
- **Filter List:**: Test cases if data are returned correctly containing the typer letter. Also cases about showing/hiding empty views based on result.

## Time Spent

Time spent for this assignment is approximately 12 hours, 10 hours development and 2 hours improvements and preparing the documentation.

## Prerequisites for Running an App with Expo

    1. Node.js

To check if it's installed, run:

- `node -v`

  2. Run:

- `npm install`

  3. Expo CLI:

- `npm install -g expo-cli`

  4. Xcode for iOS app, Android Studio for Android
  5. Run:

- `npx expo start`
  to start the app
