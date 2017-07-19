"use strict"
var readlineSync = require('readline-sync');
var math = require('mathjs');
var Switch = require('switch-fn')

console.log(`Enter a and b where a + ib is the first complex number.`)
var a = readlineSync.question('a: ')
var b = readlineSync.question('b: ')
console.log(`Enter c and d where c + id is the second complex number.`)
var c = readlineSync.question('c: ')
var d = readlineSync.question('d: ')

var operations = ['Add', 'Substract', 'Multiply', 'Divide'];
var index = readlineSync.keyInSelect(operations, 'Which Operation?')

var eq1 = math.complex(a, b);
var eq2 = math.complex(c, d);

var op = Switch({
  0: (n) => math.add(eq1, eq2),
  1: (n) => math.subtract(eq1, eq2),
  2: (n) => math.multiply(eq1, eq2),
  3: (n) => math.divide(eq1, eq2),
  default: (n) => n
});

let res = op(index);

console.log(`Result ${res}.`)
