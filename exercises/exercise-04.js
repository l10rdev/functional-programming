import { strict as assert } from 'assert';
import { employees } from '../data/employees.js';

// Exercise 4: Rewrite this function using a higher order functions.
function getBestRevenuesTotal(employees) {
  let totalRevenue = 0;
  const minSales = 75000;

  for (let employee of employees) {
    if (employee.department === 'Sales') {
      const customers = employee.customers;
      for (let customer of customers) {
        let customerTotalSales = 0;
        for (let order of customer.orders) {
          customerTotalSales += order.total;
        }
        if (customerTotalSales >= minSales) {
          totalRevenue += customerTotalSales;
        }
      }
    }
  }

  return totalRevenue;
}

assert.equal(2000000, getBestRevenuesTotal(employees));
