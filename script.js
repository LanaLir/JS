let age = parseFloat(prompt('Введите Ваш возраст: '));
function checkAge(age) {
    let a = Number(age);

    if (Number.isFinite (a) == true) {
         if (a < 18) {
         alert("You don`t have access cause your age is " + age + " It`s less then")
          } else if (a >= 18 && a < 60) {
          alert("Welcome !")
          } else if (a > 60) {
           alert("Keep calm and look Culture channel")
         } else {
        alert("Technical work")
        }}
    else{alert("ERROR!")}
    }

    checkAge(age);