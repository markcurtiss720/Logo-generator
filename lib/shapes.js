
// Creates the class Shape that has a constructor intializing color and sets the color value.
class Shapes {
    constructor() {
        this.color = ''
    }
    setColor(color) {
        this.color = (color)
    }
}

// Creates the Circle class that extends Shape and renders an SVG Circle with size, fill color, and position
class Circle extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

// Creates the Triangle class that extends Shape and renders an SVG Triangle with size, fill color, and position
class Triangle extends Shapes{
    render(){
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`
    }
}

// Creates the Square class that extends Shape and renders an SVG Square with size, fill color, and position
class Square extends Shapes{
    render(){
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`
    }
}



module.exports = {Circle, Triangle, Square};