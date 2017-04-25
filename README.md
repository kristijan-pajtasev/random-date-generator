# random-date-generator
JS package for random date generation

## Description
This small library was created to ease up generating mocked data.

## Usage
```
let DateGenerator = require('random-date-generator');
DateGenerator.getRandomDate(); // random date

let startDate = new Date(2017, 2, 2);
let endDate = new Date(2017, 3, 3);
DateGenerator.getRandomDateInRange(startDate, endDate); // random date in range
```
