import assert from 'node:assert';
import {employees} from "../data/employees.js";

// Exercise 10: Write a function that return the number of employees in each Department.
function employeesPerDepartment(employees) {}

assert.deepEqual(
  { Assistance: 1, Consultation: 2, IT: 1, Law: 2, Management: 2, Sales: 4 },
  employeesPerDepartment(employees),
);
