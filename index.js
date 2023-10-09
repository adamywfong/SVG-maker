const SVG = require ('./lib/svg');
const {Square, Triangle, Circle} = require('./lib/shapes');
const inquirer = require('inquirer');
const fs = require('fs');

// Function to ask for logo information on init
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter up to three characters to include in your logo',
                name: 'text',
            },
            {
                type: 'input',
                message: 'Enter a color for your text (color name or hexadecimal number preceded by "#")',
                name: 'textColor',
            },
            {
                type: 'list',
                message: 'Choose a shape for your logo',
                name: 'shape',
                choices: ['Square', 'Circle', 'Triangle'],
            },
            {
                type:'input',
                message: 'Enter a color for your shape (color name or hexadecimal number preceded by "#")',
                name: 'shapeColor',
            }
        ])
        .then((response) => {
            const svg = new SVG();
            svg.setText(response.text, response.textColor);
            switch (response.shape) {
                case 'Square':
                    svg.setShape(new Square(response.shapeColor));
                    break;
                case 'Triangle':
                    svg.setShape(new Triangle(response.shapeColor));
                    break;
                case 'Circle':
                    svg.setShape(new Circle(response.shapeColor));
                    break;
                default:
                    break;
            }
            fs.writeFile('./output/logo.svg', svg.render(), (err) =>
               err ? console.error(err) : console.log('Generated logo.svg'))
        })
        .catch((err) => 
            console.log(err)
        )
}   

// Function call to initialize app
init();