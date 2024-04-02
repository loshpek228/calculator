// const display = document.getElementById("display")

// function appendToDisplay(input) {
//     display.value += input;
// }
// function clearDisplay(){
//  display.value = ""
// }
// function calculate(){
// try{
//     display.value = eval(display.value);
// }
// catch(error){
//     display.value = "Error";
// }
// }










// const display = document.getElementById("display");

// function appendToDisplay(input) {
//     display.value += input;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function calculate() {
//     try {
//         let expression = display.value;
//         expression = expression.replace(/root\((\d+)\)/g, 'Math.sqrt($1)'); // Заменяем root(число) на вызов функции Math.sqrt(число)
//         expression = expression.replace(/\^/g, '**'); // Заменяем оператор ^ на **
//         let result = eval(expression); // Выполняем вычисления
//         display.value = result; // Отображаем результат на экране
//     } catch(error) {
//         display.value = "Error";
//     }
// }




const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value;
        expression = expression.replace(/root\((\d+),(\d+)\)/g, 'calculateRoot($1, $2)'); // Заменяем root(число, степень) на вызов функции calculateRoot(число, степень)
        expression = expression.replace(/\^/g, '**'); // Заменяем оператор ^ на **
        let result = eval(expression); // Выполняем вычисления
        display.value = result; // Отображаем результат на экране
    } catch(error) {
        display.value = "Error";
    }
}

function calculateRoot(number, degree) {
    return Math.pow(number, 1 / degree);
}




    
