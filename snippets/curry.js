function add(x) {
  return function (y) {
    return x + y;
  };
}

const add3 = add(3);
const result1 = add3(5);
console.log('result1', result1);

const result2 = add(3)(5);
console.log('result2', result2);

function sum(a, b, c, d) {
  return a + b + c + d;
}

function curring(fn, ...outerArgs) {
  return function (...innerArgs) {
    return fn(...outerArgs, ...innerArgs);
  };
}

const _add1_3 = curring(sum, 1);
const add1_3 = _add1_3(2, 3, 4);
console.log('add1_3', add1_3);

const _add2_2 = curring(sum, 1, 2);
const add2_2 = _add2_2(3, 4);
console.log('add2_2', add2_2);

/*const _add1 = curring(sum, 1);
const _add2 = _add1(2);
const _add3 = _add2(2);*/

/*
console. log (curriedAdd (1, 2, 3, 4));
console. log (curriedAdd (1) (2) (3) (4));
console. log (curriedAdd (1, 2, 3) (4));
console. log (curriedAdd (1) (2, 3, 4));
console. log (curriedAdd (1, 2) (3, 4));
console. log (curriedAdd (1) (2, 3) (4));
console. log (curriedAdd (1, 2) (3) (4));
 */

function dynamicCurry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // fn.length = count of arguments
      return fn(...args);
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs);
      };
    }
  };
}

const curriedAdd = dynamicCurry(sum);
console.log('curriedAdd', curriedAdd(1, 2, 3, 4));
