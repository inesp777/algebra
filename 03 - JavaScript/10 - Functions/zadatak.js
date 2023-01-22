//1

var ftemp;
let ctemp = prompt("Unesi temperaturu u C");
function tocelsius(temp) {

    return (5 / 9) * (ctemp - 32);
}

ftemp = tocelsius(ctemp);

console.log(`${ftemp.toFixed(2)} *F equals to ${ctemp} *C`)


//2

function add(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum
};

console.log(add(1, 2, 3, 4, 5));

//3
// BMI Calculaor
(function calculateBMI() {
    var myalert = '';

    let result;

    let height = prompt(`What is your height: `);
    let weight = prompt(`What is your weight:: `);

    result = weight / (height * 2);
    if (result <= 18.5) {
        myalert = 'Underweight';
    }
    if (result > 18.5 && result <= 24.9) {
        myalert = 'Normal weight';
    }
    if (result >= 25 && result <= 29.9) {
        myalert = 'Overweight';
    }
    if (result >= 30) {
        myalert = 'Obesity';
    }

    return alert(myalert);

})();