"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const Buttons = document.querySelectorAll('button');
    const screen = document.querySelector('.display');
    let expression = '';
  
    Buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        const buttonText = button.textContent;
  
        if (buttonText === 'C') {
          expression = '';
        } else if (buttonText === '=') {
          try {
            expression = expression.replace(/%/g, '/100');
            expression = expression.replace(/÷/g, '/');
            expression = expression.replace(/x/g, '*');
            expression = eval(expression);
            if (!isNaN(expression) && isFinite(expression) && expression % 1 !== 0) {
              expression = parseFloat(expression).toFixed(7);
            }
          } catch (error) {
            expression = 'Error';
          }
        } else if (buttonText === 'DEL') {
          expression = expression.slice(0, -1);
        } else {
          expression += buttonText;
        }
  
        screen.textContent = expression;
      });
    });
  });