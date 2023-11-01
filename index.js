const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes.js')

class Svg {
    constructor(){
        this.textEL = ""
        this.shapeEl = ""
    }
    render(){
        return(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       
        ${this.shapeEl}

        ${this.textEL}

    </svg>`)
    }
    setTextEl(text, color) {
        this.textEL = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setColorEl(shape) {
        this.shapeEl = shape.render();
    }
}


    const questions = [
        {
            type: 'input',
            message: "TEXT: Please enter up to (3) characters",
            name: "text"
        },
        {
            type: 'input',
            message: "TEXT COLOR: Please enter a color keyword OR a hexadecimal number",
            name: "textColor"
        },
        {
            type: 'input',
            message: "SHAPE COLOR: Please enter a color keyword OR a hexadecimal number",
            name: "shapeColor"
        },
        {
            type: 'list',
            message: "SHAPE: Please choose a shape",
            name: "shape",
            choices: [
                "Circle",
                "Triangle",
                "Square"
            ]
        },
    ];
    

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg!'))
}

function init() {
    let svgInput = "";
    let file = "logo.svg";

    
    const answers = inquirer.prompt(questions)
    .then((answers) => {
    console.log(answers)
    let inputText = "";
    if(answers.text.length > 0 && answers.text.length < 4) {
        inputText = answers.text;
        console.log(`logo text: ${inputText}`)
    } else {
        console.log("Please enter 1-3 characters")
        return;
    };

    let textColor = answers.textColor;
    let shape_Color = answers.shapeColor;
    let inputShape = answers.shape;

    let desiredShape;
    if (inputShape === "Circle") {
        desiredShape = new Circle();
        console.log("You have chosen Circle")
    } else if (inputShape === "Triangle") {
        desiredShape = new Triangle();
        console.log("You have chosen Triangle")
    } else if (inputShape === "Square") {
        desiredShape = new Square;
        console.log("You have chosen Square")
    }

    desiredShape.setColor(shape_Color)

    let svg = new Svg();
    svg.setTextEl(inputText, textColor);
    svg.setColorEl(desiredShape);
    svgInput = svg.render();

    writeToFile(file, svgInput)
    })
}

init();