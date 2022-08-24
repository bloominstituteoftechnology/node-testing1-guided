// Build a Car class!
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.odometer = 0;
    }

    drive(...distance) {
        this.odometer += distance.reduce((prev, cur) => prev + cur);
    }

    driveAsync(distance) {
        return new Promise(resolve => {
            setTimeout(() => {
                this.odometer += distance
                resolve();
            },
            distance * 20);
        });
    }
}

module.exports = {
    Car
};