export default function iterateThroughObject(reportWithIterator) {
    let employeeList = '';
  
    for (const employee of reportWithIterator) {
      employeeList += employee + ' | ';
    }
  
    // Remove the trailing " | "
    return employeeList.slice(0, -3); 
  }git