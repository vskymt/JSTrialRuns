let count = {
    first: 1,
    second: 2,
    third: 3,

    sum: function() {
        return this.first + this.second + this.third;
    }
};
let p = count.sum();
console.log(p);

let circle = {
    radius: 1,
    locatio: {
        x:1,
        y:1
    },
    draw: function() {
        console.log ('draw');
    }
};
circle.draw();

function createCircle (radius) {
    return {
    //radius, is radius=radius, (update)
    radius,
    draw: function () {
        console.log('draw');
    }
    };
}
let circle2 = createCircle(1);
circle2.draw();

function Circle(radius) {
    console.log('this',this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
let another = new Circle(1);
another.draw();
console.log(another.constructor);
console.log(circle2.constructor);
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

const Circle1 = new Function('radius', `console.log('this',this);
this.radius = radius;
this.draw = function() {
    console.log('draw');
}`);
let circle3 = new Circle1(1);
circle3.draw();
