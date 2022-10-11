const num = prompt ('Какое число я загадал. PS: это число среди 1-10')

if (num < 10) {
    console.log('Мало');
}   else if(num > 10){
    console.log('Слишком много');
}   else {
    console.log('Правильно!');
}



let nameData = 'Халид';
let passwordData = '777';

let name = prompt('Логин?');
let password = prompt('Пароль?');

if(nameData === name && passwordData === password){
    console.log('Добро Пожаловать!');
}
    else{
    console.log('Неправильно');
}



let code = ''


switch(code){
    case('html'): 
    console.log('html');
    break;
    
    case('css'): 
    console.log('css');
    break;
    
    case('js'): 
    console.log('js');
    break;
    
    case('react'): 
    console.log('react');

    default:
    console.log('default');
}