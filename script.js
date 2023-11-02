const lcd = document.querySelector('.screen');
let calc = '';

function writeToLcd(text, answer=false){
    if (answer == false){
    lcd.textContent += ` ${text}`;
    calc += text;
    } else {
        clearLcd();
        lcd.textContent = text;
    }
}

function clearLcd(){
    lcd.textContent = '';
}

const numericButtonsList = document.querySelectorAll('.number,.operator');
numericButtonsList.forEach((element) => {
    element.addEventListener('click', () => {
        writeToLcd(element.textContent);
    })
})

const evaluate = document.querySelector('.equals')
evaluate.addEventListener('click', () => {
    calc = calc.replace('×','*');
    calc = calc.replace('÷','/')
    calc = calc.replace('−','-')
    //alert(calc);
    writeToLcd(math.evaluate(calc),true);
})

//add button to clear the screen
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    clearLcd();
    calc = '';
})