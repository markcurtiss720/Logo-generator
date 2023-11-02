const {Circle, Triangle, Square} = require('../lib/shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it("Circle should render correctly", () => {
            const shape = new Circle();
            let color = ("green");
            shape.setColor(color);

            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`)
        });
    });

    describe('Triangle', () => {
        it("Triangle should render correctly", () => {
            const shape = new Triangle();
            let color = ("green");
            shape.setColor(color);

            expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`)
        });
    });

    describe('Square', () => {
        it("Square should render correctly", () => {
            const shape = new Square();
            let color = ("green");
            shape.setColor(color);

            expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`)
        });
    });
});

