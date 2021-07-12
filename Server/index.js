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
circle.draw();s