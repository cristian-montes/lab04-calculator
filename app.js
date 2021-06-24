// import functions

import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';

const inputGen1 = document.getElementById('inputGen1');
const inputGen2 = document.getElementById('inputGen2');
const genAnswer = document.getElementById('genAnswer');
const calcOptionBtn = document.getElementById('calc-option');
const submitBtn = document.getElementById('submit-btn');

const addOption = document.getElementById('add-op');
const subtractOption = document.getElementById('subtract-op');
const multiplyOption = document.getElementById('multiply-op');
const divideOption = document.getElementById('devide-op');



submitBtn.addEventListener('click', () => {

    if (addOption){
        const add1 = Number(inputGen1.value);
        const add2 = Number(inputGen2.value);
        const answer = add(add1, add2);
        genAnswer.textContent = answer;
    } if (subtractOption){
        const subtract1 = Number(inputGen1.value);
        const subtract2 = Number(inputGen2.value);
        const answer = subtract(subtract1, subtract2);
        genAnswer.textContent = answer;
    } if (multiplyOption){
        const multi1 = Number(inputGen1.value);
        const multi2 = Number(inputGen2.value);
        const answer = multiply(multi1, multi2);
        genAnswer.textContent = answer;
    } if (divideOption){
        const divi1 = Number(inputGen1.value);
        const divi2 = Number(inputGen2.value);
        const answer = divide(divi1, divi2);
        genAnswer.textContent = answer;
    }

});