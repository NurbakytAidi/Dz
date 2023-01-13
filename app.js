var numbers = 0;
while (numbers <= 20) {
    if (numbers % 2 == 0) {
        console.log(numbers);
    }
    numbers++;
}


var number = 0;
var sum = 0;
do {
    number = prompt('Введите число');
    if (number > 0) {
        sum += +number;
    }
} while (number > 0);
console.log(sum);