import { employees } from '../data/employees.js';

let totalRevenue = 0;

for (let employee of employees) {
  if (employee.department === 'Sales') {
    const customers = employee.customers;
    for (let customer of customers) {
      let customerTotalSales = 0;
      for (let order of customer.orders) {
        customerTotalSales += order.total;
      }
      if (customerTotalSales >= 7500) {
        totalRevenue += customerTotalSales;
      }
    }
  }
}

console.log(totalRevenue);
