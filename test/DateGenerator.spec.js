let DateGenerator = require('../src/DateGenerator');
let assert = require('assert');

describe('DateGenerator', function() {

    it('getRandomDate returns date', function() {
        let date = DateGenerator.getRandomDate();
        assert.equal(true, date instanceof Date && !isNaN(date.valueOf()));
    });

    it('getRandomDate returns between given dates', function() {
        let startDate = new Date(2017, 2, 12);
        let endDate = new Date(2017, 3, 22);
        for(let i = 0; i < 100; i++) {
            let date = DateGenerator.getRandomDateInRange(startDate, endDate);
            assert.equal(true, date <= endDate && date >= startDate);
        }
    });

    it('getRandomDate returns between given dates for default values', function() {
        for(let i = 0; i < 100; i++) {
            let currentDate = new Date();
            let date = DateGenerator.getRandomDateInRange();
            assert.equal(true, date - currentDate < 10);
        }
    });

});