
//Задание 1*

function checkAge(age) {
    if (age < 18) {
        console.log("You don`t have access cause your age is " + age + " It`s less then")
    } else if (age >= 18 && age < 60) {
        console.log("Welcome !")
    } else if (age > 60) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
    };
    checkAge(17);
    checkAge(18);
    checkAge(61);
  


    //Задание 2*

function checkAge(age) {
        if (Number.isFinite (age) == true) {
             if (age < 18) {
             console.log("You don`t have access cause your age is " + age + " It`s less then")
              } else if (age >= 18 && age < 60) {
              console.log("Welcome !")
              } else if (age > 60) {
               console.log("Keep calm and look Culture channel")
             } else {
            console.log("Technical work")
            }}
            else{console.log("ERROR!")}
        }
    checkAge(56);
    checkAge("12e");


//Задание 3**

    function checkAge(age) {
        let a = Number(age);

       // if (Number.isFinite (a) == true) 
		 if (age && Number.isFinite (a)) 
		 {
             if (a < 18) {
             console.log("You don`t have access cause your age is " + age + " It`s less then")
              } else if (a >= 18 && a < 60) {
              console.log("Welcome !")
              } else if (a > 60) {
               console.log("Keep calm and look Culture channel")
             } else {
            console.log("Technical work")
            }}
        else{console.log("ERROR!")}
        }
    checkAge(56);
    checkAge("12e");   
    checkAge('77');


//Задание 3**. Вариант 2

    function checkAge(age) {
             if (age && ! isNaN (age)) {
             if (age < 18) {
             console.log("You don`t have access cause your age is " + age + " It`s less then")
              } else if (age >= 18 && age < 60) {
              console.log("Welcome !")
              } else if (age > 60) {
               console.log("Keep calm and look Culture channel")
             } else {
            console.log("Technical work")
            }}
        else{console.log("ERROR!")}
        }
    checkAge(' ');
    checkAge("12e");   
    checkAge('77');
    checkAge(null);
    checkAge(56/0);
	
	//Задание 3**. Вариант 3
	
	function checkAge(a) {
        
        if (! isNaN (a) == true && a != null) {
             if (a < 18) {
             console.log("You don`t have access cause your age is " + a + " It`s less then")
              } else if (a >= 18 && a < 60) {
              console.log("Welcome !")
              } else if (a > 60) {
               console.log("Keep calm and look Culture channel")
             } else {
            console.log("Technical work")
            }}
        else{console.log("ERROR!")}
        }
    checkAge(56);
    checkAge('try');   
    checkAge('77');
    checkAge(null);
    checkAge(56/0);
    checkAge( );
    checkAge(' ');