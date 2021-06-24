// IMPORT MODULES under test here:
import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';

const test = QUnit.test;

// ADD
// name your test by what it is testing
test('test add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// SUBTRACT
// name your test by what it is testing
test('test subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(3, 1); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// MULTIPLYING
// name your test by what it is testing
test('test multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(3, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

// DEVIDE
// name your test by what it is testing
test('test divide', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(3, 3); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});