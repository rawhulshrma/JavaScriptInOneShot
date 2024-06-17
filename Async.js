// function firstProg(some){
//     alert (some)
//     function secondProg(){
//         alert ("this is second")
//     }
//     secondProg()
// }
// firstProg(`Jatt nu kahdi se ki mera jee kho gya `)



function timer(name, age) {
    this.name = name;
    this.age = age;
    console.log(`My name is ${this.name} and my age is ${this.age}`);
}

// Timer ko pehli baar call karte hain
timer("Rahul", 24);

// setInterval ke liye ek wrapper function use karte hain jisme specific arguments pass ho sakein
setInterval(function() {
    timer("Rahul", 24);
}, 5000);
