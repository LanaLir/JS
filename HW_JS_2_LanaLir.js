//1. Считаем и выводим результат от возведения 2 в степень 10, начиная от 1

let i = 1;
while (i < 11)
{ let pow = Math.pow(2,i);
    result = pow;
    console.log("2 в степени " + i + " = " + result);
    i++
};


// 1*. Преобразовываем задачу 1 в функцию, что примет на вход степень, в которую будет выводиться число 2
let x;
function pow_2(x) {

    let i = 1;
    while (i <= x)
    { let pow = Math.pow(2,i);
        result = pow;
        console.log("2 в степени " + i + " = " + result);
        i++
    };

}
pow_2(5);

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
//чтобы в первой строчке выводилось :), во второй :):) и так далее

let a = 1
while (a <= 5)
{console.log(";)".repeat(a));
a++
};


//2*.Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль и количество повторений


function printSmile(stroka, numberOfRows) {
    let a = 1
while (a <= numberOfRows)
{console.log(stroka.repeat(a));
a++
};
}

printSmile("lol", 10)

//3**.  Написать функцию, которая принимает на вход слово. И выводит количество глассных и согласных
function getWordStructure(word) {
    let word2 = word.replace(/[^a-z]/gi, '')
    let vowel = word2.match(/[aeiou]/ig).length
    let soglas = word2.length - vowel;
    console.log("Слово '" + word + "' состоит из " + vowel + " гласных и " + soglas + " согласных")
return vowel, soglas;
}

getWordStructure('case');
getWordStructure('Case');
getWordStructure('Check-list');
getWordStructure('Arrow');


//4. проверяем, является ли слово паллиндромом
function isPalindrom(word) {
    let word3 = word.toLowerCase();
    noSpace = word3.replace(/\s/g, '');
    revers = noSpace.split("").reverse().join("");
    if (noSpace === revers) {console.log( word + ": введенное выражение является палиндромом")}
    else {console.log(word + " - это не палиндром")}

  }
  isPalindrom("Hello")
  isPalindrom("abba")
  isPalindrom("Abba")
  isPalindrom("Was it a car or a cat I saw")