document.addEventListener('DOMContentLoaded', function () {
    const container = document.createElement('div');
    container.classList.add('container', 'mt-5');
  
    const title = document.createElement('h1');
    title.id = 'title';
    title.textContent = 'Calculator';
    title.classList.add('title','d-flex', 'justify-content-center','align-item-center','link-info','display-2')
  
    const description = document.createElement('p');
    description.id = 'description';
    description.textContent = 'Created a calculator using DOM with keyboard events for numbers. This will handle addition, subtraction, multiplication, division, and modulus.';
    description.classList.add('description','d-flex', 'justify-content-center','align-item-center','mb-5', 'container-fluid','link-body-emphasis')

  
    container.appendChild(title);
    container.appendChild(description);

    const calculator = document.createElement('div');
    calculator.classList.add('calculator');
  
    const display = document.createElement('input');
    display.type = 'text';
    display.id = 'result';
    display.classList.add('form-control', 'mb-4', 'p-5','fs-5');
    display.readOnly = true;
  
    calculator.appendChild(display);
  
    const buttons = [
      ['7', '8', '9', '+'],
      ['4', '5', '6', '-'],
      ['1', '2', '3',, '*'],
      ['C', '0', '=', '/']
    ];
    
    buttons.forEach(row => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row','m-2','p-2');
      
  
      row.forEach(value => {
        const button = document.createElement('button');
        button.classList.add('btn', value === '=' ? 'btn-success' : value === 'C' ? 'btn-warning' : 'btn-secondary', 'col', 'mx-2', 'p-4','fw-bolder');
        button.textContent = value;
        button.addEventListener('click', function () {
          handleButtonClick(value);
        });
  
        rowElement.appendChild(button);
      });
  
      calculator.appendChild(rowElement);
    });
  
    container.appendChild(calculator);
    document.body.appendChild(container);
  


    let displayValue = '';
  
    function handleButtonClick(value) {
      if (/[0-9]/.test(value)) {
        appendNumber(value);
      } else if (['+', '-', '*', '/'].includes(value)) {
        setOperation(value);
      } else if (value === '=') {
        calculate();
      } else if (value === 'C') {
        clearDisplay();
      }
    }
  
    function appendNumber(number) {
      displayValue += number;
      updateDisplay();
    }
  
    function setOperation(operator) {
      displayValue += ` ${operator} `;
      updateDisplay();
    }
  
    function clearDisplay() {
      displayValue = '';
      updateDisplay();
    }
  
    function calculate() {
      try {
        displayValue = eval(displayValue);
        updateDisplay();
      } catch (error) {
        alert('Invalid expression');
        clearDisplay();
      }
    }
  
    function updateDisplay() {
      display.value = displayValue;
    }
  
    // Add event listeners for keyboard input
    document.addEventListener('keydown', function (event) {
      const key = event.key;
      handleButtonClick(key);
    });
});