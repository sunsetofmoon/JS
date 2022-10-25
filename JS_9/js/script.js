let arr_1 = [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];

let superArr = [...arr_1, ...arr_2];

console.log(superArr);

console.log(...superArr);

console.log(Math.min(...superArr));




let obj = {
    width: 300,
    height: 600,
};

let obj2 = {...obj, area: function(){
    return obj2.width + obj2.height
    },
};
console.log(obj2);
console.log(obj2.area);





for (let element = 1; element < 11; element++){
    console.log(element);
}