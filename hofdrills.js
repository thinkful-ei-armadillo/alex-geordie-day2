'use strict';

//------------------------------//
//Min-max and average functions://
//------------------------------//

function max(numbers) {
    let i = 1;
    let max = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        i++;
    }
    return max;
}
  
function min(numbers) {
    let i = 1;
    let min = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        i++;
    }
    return min;
}

function average(numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum/numbers.length;
}

//-----------------------------//
//Higher-order function drills://
//-----------------------------//

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

// console.log(filter(turtleMoves, move => {
//     return (move[0] > 0 || move[1] > 0)
// }));
// console.log(turtleMoves.map(steps => Math.abs(steps[0]) + Math.abs(steps[1])));
// turtleMoves.forEach(steps => { console.log(Math.abs(steps[0]) + Math.abs(steps[1])) });

const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const decode = function(words) {
    return words.split(' ').reduce( (acc, cur) => {
        if (cur.length === 3) { 
            return acc + ' ';
        } else {
            return acc + cur[cur.length-1].toUpperCase();
        }
    }, '');
}

// TEST:
//console.log(decode(words));


//------------------------------//
//Freecodecamp bonus challenges://
//------------------------------//

function multiplyAll(arr) {
    let product = 1;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}

function lookUpProfile(name, prop){
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            return contacts[i][prop] ? contacts[i][prop] : "No such property";
        }
    }
    return "No such contact";
    // Only change code above this line
}