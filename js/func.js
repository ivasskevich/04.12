"use strict"

function Car(brand, model, year, speed) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;

    this.displayInfo = function() {
        return `brand: ${this.brand}, model: ${this.model}, year: ${this.year}, Speed: ${this.speed} км/ч`;
    };

    this.calculateTravelTime = function(distance) {
        var travelTime = distance / this.speed;
        var restTime = Math.floor(travelTime / 4);
        return travelTime + restTime;
    };
}


function Fraction(a, b) {
    this.a = a;
    this.b = b;
}

Fraction.prototype.add = function(c) {
    return new Fraction(this.a * c.b + c.a * this.b, this.b * c.b);
};

Fraction.prototype.subtract = function(c) {
    return new Fraction(this.a * c.b - c.a * this.b, this.b * c.b);
};

Fraction.prototype.multiply = function(c) {
    return new Fraction(this.a * c.a, this.b * c.b);
};

Fraction.prototype.divide = function(c) {
    return new Fraction(this.a * c.b, this.b * c.a);
};

Fraction.prototype.reduce = function() {
    function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    }

    let nod = gcd(this.a, this.b);
    this.a /= nod;
    this.b /= nod;

    if (this.b < 0) {
        this.a = -this.a;
        this.b = -this.b;
    }

    return this;
};

function Time(h, min, sec) {
    this.h = h;
    this.min = min;
    this.sec = sec;

    this.displayTime = function() {
        return `${this.h.toString().padStart(2, '0')}:${this.min.toString().padStart(2, '0')}:${this.sec.toString().padStart(2, '0')}`;
    };

    this.addsec = function(addSec) {
        this.sec += addSec;
        this.min += Math.floor(this.sec / 60);
        this.sec %= 60;
        this.h += Math.floor(this.min / 60);
        this.min %= 60;
        this.h %= 24;
    };

    this.addmin = function(addMin) {
        this.min += addMin;
        this.h += Math.floor(this.min / 60);
        this.min %= 60;
        this.h %= 24;
    };

    this.addh = function(addHr) {
        this.h += addHr;
        this.h %= 24;
    };
}