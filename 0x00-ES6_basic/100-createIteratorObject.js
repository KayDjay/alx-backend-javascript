// export default function createIteratorObject(report) {
//     let departments = Object.values(report);
//     let employees = departments.flatMap(department => Object.values(department));
//     let index = 0;

//     return {
//         next() {
//             if (index < employees.length) {
//                 return { value: employees[index++], done: false };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// }

export default function createIteratorObject(report) {
    function* employeeIterator() {
      for (const department in report.allEmployees) {
        for (const employee of report.allEmployees[department]) {
          yield employee;
        }
      }
    }
  
    return employeeIterator(); 
  }