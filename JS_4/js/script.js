// ДЗ

function exercise (a) {
    if(a < 10){
        console.log('Константа меньше 10');
    } else{
        console.log('Константа не меньше 10');
    }
}
exercise(11);

function message() {
    alert('Hello world');
}
message()

function showMessage() {
    console.log('JavaScript');
}
showMessage();


let text = 'lorem';

function title() {
    if(text){
        console.log('У вас ошибка в тексте');
    } else{
        console.log(`Содержимое переменной: ${text}`);
    }
}
title();


// Дополнительное задание по условным операторам    


let x = 10, y = 7;
let calcSum = x > y ? 'x больше, чем y' : 'x не больше, чем y'

console.log(calcSum);


let num = prompt ('Введите число');

if(num % 2 == 0){
    alert(`Число ${ num} четное`);
} else{
    alert(`Число ${num} нечетное`);
}


let num1 = prompt('Введите число')
let num2 = prompt('Введите число')
let num3 = prompt('Введите число')

if(num1 >= num2 && num1 >= num3){
    alert(num1 +  ' Максимальное число');
} else if(num2 >= num1 && num2 >= num3){
    alert(num2 + ' Максимальное число')
} else if(num3 >= num1 && num3 >= num2){
    alert(num3 + ' Максимальное число')
}

// ДЗ


