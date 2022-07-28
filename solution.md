# CoverGo Wizzard

In this document we breifly discuss architecture and choices made for the CoverGo wizzard:

| Module           | Technology           |
| ---------------- | -------------------- |
| Language         | Typescript           |
| Framework        | React                |
| State Management | Mobx State Tree      |
| Style            | SASS                 |
| Navigation       | React Router         |
| Tests            | React Scripts (Jest) |

## Typescript + React

We use Typescript because this piece of software will be used by enterprises and therefore strong types and reliability are important.

## Navigation with React Router

To allow the user to easily move between pages and press the backbutton, we are making an SPA using React Router.

## Flux Architecture: Central Store With MobX State Tree

The wizzard is spread accross multiple pages and therefore all pages need to access the data. In order to address this issue, we build the application state inside a root store which will be passed down to observer components.

- Observer components make development simpler (more like the simple VueJs+VueX than the complex React+Redux)
- We can simply persist application state in local storage if required (the user can pick up where he left)
- Runtime type checking provided by MST makes the app more reliable

## Price Calculation

We store our conversion and rate tables in strongly typed data structures stored under the constants folder.
There are two main functions under /lib for premium calculation:

- calculatePrice which takes paramters and calculates the price
- calculateRelativePrice which takes a base parameter group and a new parameter group and calculates the difference

Note: Because of time constraints, it's not made for dynamicism in terms of loading packages or countries; But it's easily extensible due to the correct types and modular structure.

## Tests

Due to time constraints, we only write two basic test suits for the main price calcualtion functions. Tests are written with Jest, Jest is selected because of React compatibility,out of the box features and out of the box TS support by create react app.

## Styling

We use one SASS file per each component and a centeral stylesheet for global styles. Styles are dynamically imported by WebPack as each component mounts.

## How it was made

1. After reading the requirements, I opned up AdobeXD and designed a basic UI/UX
2. Then the store, views, and actions were design in a seperate pass after reading the docs
3. Price calculation functions were made with a TDD approach
4. Components and stylesheets were made and tested
5. Everything was put together
