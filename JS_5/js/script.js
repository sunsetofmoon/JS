let name = 'Халид';  // тип данных string

const age = 16;      // тип данных number


if(age < 15){
    console.log('Доступ запрещен');
} 
else{
    console.log(`Привет ${name}`);
}

function viewMoney () {
    console.log('Вот вам 10$');
}
viewMoney()

function getMoney(a = 399) {
    return (`Вот вам ${a}$`);
}
console.log(getMoney()); // возвращает Вот вам 399$


function calcSum(a) {
    console.log(a * a);
}
calcSum(12);


function calcNumber(a,b,c){

    if (a > b && a > c){
        console.log(a + ' Наибольшее число');
    } else if(b > a && b > c){
        console.log(b + ' Наибольшее число');
    } else if(c > a && c > b){
        console.log(c + ' Наибольшее число');
    }
}
calcNumber(1,3,2);


function discriminant(a, b, c){
    return result = (b**2)-(4*a*c)
}
console.log(discriminant(5,6,7));


function calcSumm(num1, num2){
    if((num1 % 2 == 0) && (num2 % 2 == 0)){
        return calc = num1 * num2
    } else if((num1 % 2 != 0) && (num2 % 2 != 0)){
        return calc = num1 + num2
    } else if(num1 % 2 != 0){
        return num1
    } else if(num2 % 2 != 0){
        return num2
    }
}
console.log(calcSumm(2, 5));