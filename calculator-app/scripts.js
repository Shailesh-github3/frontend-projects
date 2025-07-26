document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (/[0-9]/.test(key)) {
    appendToDisplay(key);
  } else if (key === '.') {
    appendToDisplay('.');
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Escape' || key === 'C' || key === 'c') {
    clearDisplay();
  } else if (key === '%') {
    appendToDisplay('%');
  }
});


const display = document.getElementById('display');
display.value = '0';              

function appendToDisplay(value) {
  if (value === 'sign') {
    // toggle +/-
    display.value = String(-parseFloat(display.value));
    return;
  }

  // percent
  if (value === '%') {
    display.value = String(parseFloat(display.value) / 100);
    return;
  }

  // normal digit / operator
  if (display.value === '0' && value !== '.') {
    display.value = '';           // remove leading 0
  }
  display.value += value;
}

function clearDisplay() {
  display.value = '0';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
  if(display.value === 'Error'){
    setTimeout(()=>{
        clearDisplay();
    },1000);
  }
}