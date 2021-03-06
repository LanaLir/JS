const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]


  // константы, которые пригодятся
  const enterprises_id = enterprises.map(element => element.id); //id всех предприятий

/* Задание 3.1. Вывести названия предприятия, отделов в этом придприятии. И количество
   сотрудников в каждом отделе, и в предприятии в целом*/

for (i = 0; i <= enterprises.length; i++) {
  function get_name (array_name) { 
    let count = array_name.map(element => element.employees_count);
        let amount = count.map(i => x += i, x = 0).reverse()[0]  
    console.log(enterprises[i].name +  ' (' + amount + ')');
      array_name.forEach(element => {console.log(" - " + (element.name) + "(" + (element.employees_count) + ")");  
       }); 
          };
      get_name(enterprises[i].departments);      
};

// Задание 3.2. Поиск предприятия по Id или имени отдела

function getEnterpriseNames(your_id) {
  if (enterprises_id.includes(your_id)) {
  let searchResult = enterprises.find(element => element.id === your_id)
  console.log(searchResult.name)               //Если введенный id соответствует id предприятия, то выводим имя
  } else { for (i = 0; i< enterprises.length; i++) {
      let serchInDepartment = enterprises[i].departments;
      searchResult_1 = serchInDepartment.find(element => element.id === your_id); 
      searchResult_2 = serchInDepartment.find(element => element.name === your_id)    
         
   if ((searchResult_1 != undefined) || (searchResult_2 != undefined)) {
      companyName = enterprises[i].name
  
  }}
  console.log(companyName)
  } }
getEnterpriseNames('Отдел тестирования');


//Задание 3.3. Создать в конце массива новый объект "Предприятие"
  
  //ищем id последнего предприятия/отдела
  length = enterprises.length;
  let last_entry = enterprises[length-1].departments.find(element => element.id);
  let max_id = last_entry.id;
  
  
  function addEnterprise (company_name) {
    // создаем новый объект
    let new_company = new Object;
    new_company['id'] = max_id +1;
    new_company['name'] = company_name;
    new_company['departments'] = [];
    
    //ДОбавляем объект в конец массива
    enterprises.push(new_company);
    console.log(enterprises);
  };
  addEnterprise('Предприятие 4');



  // Задание 3.4. Добавить в предприятие новый отдел.

//ищем id последнего предприятия/отдела
length = enterprises.length;
let last_entry = enterprises[length-1].departments.find(element => element.id);
let max_id = last_entry.id;


function addDepartment (add_ID, add_name) {

  //Ищем компанию по Id
let check_company = enterprises.filter(element => element.id === add_ID)
 object_id = (check_company.find(element => element.departments));
 
 //Создаем новый департамент
let new_department = {};
new_department['id'] = max_id + 1;
new_department['name'] = add_name;
new_department['employees_count'] = 0;

   //Добавляем департамент в конец списка департаментов компании

object_id.departments.push(new_department);
console.log(object_id);
};

addDepartment(5, 'Тунеядцы');

// Задание 3.5. Изменить название предприятия.

function editEnterprises (add_ID, new_name) {

  //Ищем компанию по Id
let result = enterprises.find(element => element.id === add_ID)

 // Меняем название на новое
 result.name = new_name;
 console.log(result);
}
editEnterprises(9, 'Шоколадная фабрика');


// Задание 3.6. Изменить название отдела.

function editDepartment (add_ID, newDepartmentName) {

  //Ищем предприятие и отдел, которому соответствует ID
  for (i = 0; i< enterprises.length; i++) {
    let serchInDepartment = enterprises[i].departments;
    searchResult_1 = serchInDepartment.find(element => element.id === add_ID); 
  
  //Выбираем нужный отдел и Меняем ему имя
    if (searchResult_1 != undefined) {
      searchResult_1.name = newDepartmentName;
      console.log(enterprises[i])
    }}
}
editDepartment(7, 'Купи-продай');

// Задание 3.7. Удаление предприятия

function deleteEnterpeises (add_ID) {
  //Ищем индекс предприятия в массиве
  let enterprisesIndex =  enterprises.findIndex(element => element.id === add_ID);
  
  //Удаляем предприятие
  enterprises.splice(enterprisesIndex, 1);
  console.log(enterprises);
  
  }
  deleteEnterpeises(5);

   

  // Задание 3.8. Удаление отдела, где нет сотрудников

function deleteDepartment (add_ID) {
  
  //Ищем отдел по ID
  for (i = 0; i< enterprises.length; i++) {
  let serchInDepartment = enterprises[i].departments;  //все отделы одной компании
  let department = serchInDepartment.find(element => element.id === add_ID)

  //Ищу индекс объекта, который нужно удалить
  departmentIndex = serchInDepartment.findIndex(element => element.id === add_ID); 
           
  if (departmentIndex != -1) {
    //Проверяем, есть ли в отделе сотрудники. Если нет, удаляем
    if (department.employees_count === 0) { 
    serchInDepartment.splice(departmentIndex, 1);
    console.log(enterprises)
    } else {console.log("вы не можете удалить отдел. В нем есть сотрудники")}
    
  }}
  
  }
deleteDepartment(10);


// Задание 3.9. Перенос сотрудников из отдела в отдел

function moveEployees (ID_from, ID_to) {
  
  //Ищем отдел из которого перенос
  for (i = 0; i< enterprises.length; i++) {
  let departmentAll = enterprises[i].departments;  
  let fromDepartment = departmentAll.find(element => element.id === ID_from);
  //Ищем отдел в который переносим
  let toDepartment = departmentAll.find(element => element.id === ID_to);
      
  //Переносим сотрудников в нужный отдел и обнуляем счетчив в отделе, из которого делается
  if (fromDepartment != undefined) {
    if (toDepartment != undefined)
   {
    toDepartment.employees_count += fromDepartment.employees_count;
    fromDepartment.employees_count = 0;
    console.log(departmentAll)
  }
   else {
    console.log("Проверьте введеный ID")
  }}}

      }
  moveEployees(7, 8)