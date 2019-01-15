'use strict';

const repeat = function(fn,n) {
    for (let i = 0; i < n; i++) {
        fn();
    }
}

const hello = () => console.log('Hello world');
const goodbye = () => console.log('Goodbye world');

repeat(hello, 5);
repeat(goodbye,5);

function filter(names, callback) {
    let newNames = [];
    for (let i = 0; i < names.length; i++) {
        if (callback(names[i])) {
            newNames.push(names[i]);
        }
    }
    return newNames;
}

console.log(filter(myNames, name => name[0] === 'R');

}
// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES