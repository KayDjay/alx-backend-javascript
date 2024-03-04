// export default function createReportObject(employeesList) {
//     return {
//         allEmployees: {
//             engineering: [...employeesList],
//         },
//         getNumberOfDepartments() {
//             return Object.keys(this.allEmployees).length;
//         },
//     };
// }

export default function createReportObject(employeesList) {
    return {
      allEmployees: {
        ...employeesList  // Spread operator for easy organization
      },
      getNumberOfDepartments() {
        return Object.keys(employeesList).length;
      }
    };
  }