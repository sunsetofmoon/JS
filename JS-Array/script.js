const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];

const positive = array.filter( item => {
    return item > 0
})
console.log(positive);


const messages = [
    {message: 'hello', error: true},  
    {message: 'javascript', error: false},  
    {message: 'expovisiov', error: true},  
    {message: 'react', error: true},  
    {message: 'angular', error: false}, 
    {message: 'es6', error: false}, 
];

const error = messages.filter((item) => item.error == false)
console.log(error);


const words = ['экспо', 'js', 'react', 'css', 'angular', 'vue', 'html'];

const massiv = words.map(function (obj){
    let star = '*';
    if (obj.length < 5){
        return star.repeat(obj.lenght)
    } else{
        return obj
    }
});
console.log(massiv);


const sendMessage = (message => {
    /*
      * тут какой-то большой код для отправки сообщения
      */
})

const half = ((number) => {
    return number / 2;
})
console.log(half(10))

const showConsole = () =>{
    console.log('Экспо')
}
showConsole()

const concatWords = (first, second) => first + second
console.log(concatWords('123', ' abcd'));



function justText(){
    return 'expo'
}
console.log(justText())


function logging(text){
    console.log(text);
}

logging('WhatIsYourName');


function add(x,y){
    const z = 3;
    return z*x*y;
}
console.log(add(2,2))


function onlyPositive(number){
    if(number < 0){
        return false;
    } else{
        return true;
    }
}
console.log(onlyPositive(-1))