let man = {
    name: "Khalid",
    family: "Aliev",
    age: 16,
    growth: "175cm",
    login: "sunsetofmoon",
    password: 777,

    address: {
        republic: "Chechen Republic",
        city: "Grozny",
        street: "prospekt Kadyrova 212",
    },
};

let proverka = prompt('Enter your password');
if(man.password == proverka){
    console.log(`Welcome, ${man.name} ${man.family}. Your login: ${man.login}`);
} else{
    console.log(`Your password ${proverka} not true`);
}