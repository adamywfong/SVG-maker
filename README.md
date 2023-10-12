# SVG Maker

## Description

This is a Node.js command-line application designed to make an SVG logo using prompts via inquirer.js.  The application prompts the user to provide text and shape for the logo, provide colors for both the color and the shape, then saves the generated SVG to a `.svg` file.  

[![Video Demonstration of Application](./examples/example-svg.gif)](https://watch.screencastify.com/v/d31LQm7C1W8RguWhpHHC)

[Example logo](./examples/logo.svg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)

## Installation
Install with `npm install` while in the application folder.

## Usage
After initializing the app via Node.js, follow the prompts to generate an SVG.  The logo text must be 3 characters or less, and the color inputs must be submitted as a color keyword or as a hexadecimal number preceded by `#`.

## Tests
Run included tests with `npm run test`.  Tests are saved in the `lib` folder