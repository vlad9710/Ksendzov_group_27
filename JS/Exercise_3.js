// 1. Создать переменную a
// 2. Создать переменную b
// 3. Присвоить a - число 50, b - число 20
let a = 50, b = 20;
// 4. Создать переменную с и присвоить ей сумму a и b, деленную на произведение a и b
let c = (a+b)/(a*b)
// 5. Вывести с
console.log(c)
// 6. Вывести сумму a+b+c, разницу между a и b и остаток от деления a на b в одну строку, не используя других переменных, в таком формате вывода 
// "Сумма a,b,c == .... Дельта a и b ==.... Остаток от деления a на b =="
console.log("Сумма a,b,c == " + (a+b+c) + ", дельта a и b == " + (a-b) + ", остаток от деления a на b == " + (a%b))


// 1* Создать функцию, которая будет выводить утроенное значение остатка от деления произведения переменных "a" и "b" на их сумму
function troinichok () {
    console.log((a*b)%(a+b)*3)
}
troinichok ()

// 2* Создать функцию, которая будет получать на вход число и на выходе будет писать - делится ли оно на 5, или делится ли оно на 11
// 3*** Подумать и предусмотреть, какие случаи могут баговать предыдущую функцию и добавить проверки на невалидные вводы
function delenie(inputs) {
    if (isNaN(inputs) == true) {
        console.log("Я ж тебе написал, введи число")
    } else {
        if (inputs%5 == 0) {
            console.log ("Введенное число делится на 5")
        } else if (inputs%11 == 0) {
            console.log ("Введенное число делится на 11")
        } else console.log("Введенное число не делится ни на 5, ни на 11")
    }
}

delenie("15") // Введите число

