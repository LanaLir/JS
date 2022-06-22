// подключаем БД из json
const fs = require(`fs`);
let task_data = fs.readFileSync('./task2.json', 'utf8');

let cardUser = JSON.parse(task_data);

//собираем имена всех пользователей
let allUsers = cardUser.map(element => element.name);


//Достаем из массива имен только уникальные значения

let uniq_user = Array.from(new Set(allUsers));
console.log(uniq_user);

// С помощью find ищу первое совпадение по имени пользователя, шагая по массиву со значениями уникальных имен
const find_uniq_card = function(){
for (i = 0; i < uniq_user.length; i++) {

      let uniq_user_card = cardUser.find(element => element.name == uniq_user[i]);
      console.log(uniq_user_card)
      
                                       }
                                 }
find_uniq_card()
