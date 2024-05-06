class SteeringWheel {
    constructor(diameter, button) {
        this.diameter = diameter;
        this.button = button;
    }
}

SteeringWheel.prototype.turnLeft = function() {
    console.log("Left");
};

SteeringWheel.prototype.turnRight = function() {
    console.log("Right");
};

class Car {
    constructor(brand, model, year, steeringWheel) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.steeringWheel = steeringWheel;
        this.engineStarted = false;
        this.speed = 0;
    }
}

Car.prototype.startEngine = function() {
    this.engineStarted = true;
};

Car.prototype.stopEngine = function() {
    this.engineStarted = false;
    this.speed = 0;
};

Car.prototype.accelerate = function(speed) {
    this.engineStarted ? this.speed += speed : console.log('Start your engine');
};

Car.prototype.decelerate = function(speed) {
    if (this.engineStarted) {
        if (speed > this.speed) {
            this.stopEngine();
        } else {
            this.speed -= speed;
        }
    } else {
        console.log('Start your engine');
    }
};

const bmwWheel = new SteeringWheel(55, 'Start');
const bmw = new Car('BMW', 'E35', 1999, bmwWheel);
