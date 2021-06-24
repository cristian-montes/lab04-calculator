// import functions

import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';
import { modulo } from '../calculator.js';
import { hypotenuse } from './calculator.js';

const inputGen1 = document.getElementById('inputGen1');
const inputGen2 = document.getElementById('inputGen2');
const genAnswer = document.getElementById('genAnswer');
const calcOptionBtn = document.getElementById('calc-option');
const submitBtn = document.getElementById('submit-btn');
const mathSing = document.getElementById('math-sign');

// const addOption = document.getElementById('add-op');
// const subtractOption = document.getElementById('subtract-op');
// const multiplyOption = document.getElementById('multiply-op');
// const divideOption = document.getElementById('divide-op');


submitBtn.addEventListener('click', () => {
    let operation = calcOptionBtn.value;


    if (operation === 'add'){
        mathSing.textContent = '+';
        const add1 = Number(inputGen1.value);
        const add2 = Number(inputGen2.value);
        const answer = add(add1, add2);
        genAnswer.textContent = answer;
    } if (operation === 'subtract'){
        const subtract1 = Number(inputGen1.value);
        const subtract2 = Number(inputGen2.value);
        const answer = subtract(subtract1, subtract2);
        genAnswer.textContent = answer;
        mathSing.textContent = '-';
    } if (operation === 'multiply'){
        const multi1 = Number(inputGen1.value);
        const multi2 = Number(inputGen2.value);
        const answer = multiply(multi1, multi2);
        genAnswer.textContent = answer;
        mathSing.textContent = '*';
    } if (operation === 'divide'){
        const divi1 = Number(inputGen1.value);
        const divi2 = Number(inputGen2.value);
        const answer = divide(divi1, divi2);
        genAnswer.textContent = answer;
        mathSing.textContent = '/';
    } if (operation === 'modulo'){
        const modu1 = Number(inputGen1.value);
        const modu2 = Number(inputGen2.value);
        const answer = modulo(modu1, modu2);
        genAnswer.textContent = answer;
        mathSing.textContent = '%';
    } if (operation === 'hypotenuse'){
        const a = Number(inputGen1.value);
        const b = Number(inputGen2.value);
        const answer = hypotenuse(a, b);
        genAnswer.textContent = answer;
        mathSing.textContent = '+';
    }
    
});


    