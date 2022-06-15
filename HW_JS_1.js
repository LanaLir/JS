let item_1         //создаем переменную
item_1 = 5                 //присваиваем ей значение
console.log("item_1 =", item_1)  //выводим в консоль

let item_2 = 3   //создаем переменную и присваиваем ей значение
console.log(item_2)    //выводим значение item_2

let item_3            //создали переменную item_3
item_3 = item_1 + item_2           //присвоили ей значение суммы item_1 и item_2
console.log("item_3 = ", item_3)          //выводим значение item_3

let item_4;           
item_4 = "Yolochka";    //создать переменную item_4, присвоить ей значение, 
console.log(item_4);     //вывести в  консоль

console.log(item_3 + item_4) // вывести в консоль сложение переменных item_3 и item_4
console.log("Если перемножить item_3 и item_4, получим ", item_3 * item_4)  
 
let item_5            // создать переменную item_5
item_5 = item_3        // присвоить ей значение item_3

let item_6;                    // создать переменную item_6
let item_6_type;               // создать переменную item_6_type
item_6 = 15;                  // присвоить item_6 значение 15
item_6_type = typeof(item_6=15);              // присвоить item_6_type тип переменной item_6

console.log("item_6 ==" + item_6 + ", item_6_type ==" + item_6_type) //вывести в консоль тип данных item_6
// console.log("item_6_type ==", typeof(item_6_type)) //вывести в консоль тип данных item_6_type



let item_7 = String(item_6);  //Создать переменную item_7 и в ней преобразовать item_6 в String
let item_7_type;
item_7_type = typeof(item_7)
console.log("item_7 ==", item_7) //вывести в консоль тип данных item_7
console.log("item_7_type ==", item_7_type) //вывести в консоль тип данных item_7_type




let age_1 = 10
let age_2 = 18
let age_3 = 60

if (age_1 < age_2) {
    console.log("You don`t have access cause your age is " + age_1 + " It`s less then")
} else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !")
} else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}