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

// Задание 3.2

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