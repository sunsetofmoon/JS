let a = ['lorem', 123, true, 'ipsum'];

console.log(a.length);
console.log(a[0]);
console.log(a[3]);


let em = ['expo', 777, false, 'grozny'];

em.splice(0,3, 'Expovision', 321, true );

em.unshift('moscow');

em.push('frontend');

em.shift();

em.pop();
em.pop();

console.log(em);



let number = [1, 3, 5, 7, 9];

number.splice(0,5,  0, 2, 4, 6, 8, 10);

console.log(number);