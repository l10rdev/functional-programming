import { strict as assert } from 'assert';
import { employees } from '../data/employees.js';

// Exercise 4: Rewrite this function using a higher order functions.
function getBestRevenuesTotal(employees) {
  const minSales = 75000;

  return employees
      .filter((employee) => employee.department === 'Sales')
      .map((salesEmployees) => (salesEmployees.customers))
      .flat(1)
      .map(customer => {
        return customer.orders.reduce((acc, order) => {
          return acc + order.total;
        }, 0);
      })
      .filter(orderTotal => orderTotal >= minSales)
      .reduce((acc, orderTotal) => acc + orderTotal, 0);
}

assert.equal(2000000, getBestRevenuesTotal(employees));
