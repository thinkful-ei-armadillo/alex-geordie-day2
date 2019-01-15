'use strict';

const repeat = function(fn,n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

const hello = () => console.log('Hello world');
const goodbye = () => console.log('Goodbye world');

// TESTS:
//repeat(hello, 5);
//repeat(goodbye,5);

function filter(names, callback) {
    let newNames = [];
    for (let i = 0; i < names.length; i++) {
        if (callback(names[i])) {
            newNames.push(names[i]);
        }
    }
    return newNames;
}

// TEST:
// console.log(filter(myNames, name => name[0] === 'R');

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return (location) => {
        warningCounter++;
        let times = (warningCounter === 1) ? 'time' : 'times';
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${times} today!`);
    }
}

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// const acidWarning = hazardWarningCreator('Acid on the Road');
// const aliensWarning = hazardWarningCreator('Aliens on the Road');

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Rocks Valley');
// acidWarning('Random Chemical Plant');
// acidWarning('TB Station');
// aliensWarning('Area 51');
// aliensWarning('Sunshine Meadows');
// aliensWarning("Old McDonald's Farm");

function filter(keys, callback) {
    let newNames = [];
    for (let i = 0; i < keys.length; i++) {
        if (callback(keys[i])) {
            newNames.push(keys[i]);
        }
    }
    return newNames;
}

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(filter(turtleMoves, move => {
    return (move[0] > 0 || move[1] > 0)
}));

console.log(turtleMoves.map(steps => Math.abs(steps[0]) + Math.abs(steps[1])));
turtleMoves.forEach(steps => { console.log(Math.abs(steps[0]) + Math.abs(steps[1])) });