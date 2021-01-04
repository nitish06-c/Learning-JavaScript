// comment
var number = 5;
/* this is a
fsd
sdaf
fd
multi-line comment */ 

number = 9;

/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/


var myName = "Nitish";

myName = 8;

let ourName = "NitishMadabusi"
// let only works within the scope u declare it in


const pi = 3.14;
// u can never change a const

/* it is recommended to use a semi-colon to end lines 
even if not necessary */

a = 7;

b = a;
console.log(a)


var a = 9;

// Variable Names and Function Names in JavaScript are Case Sensitive
// Camel Case is good for assigning variables i.e. titleVarCap

var sum = 10 + 10;
// use + to add

var difference = 45 - 33;
// use - to subtract

var product = 8 * 10;
// use * to multiply

var quotient = 66 / 33;
// use / to divide

var myVar = 87;
myVar++; 
// ++ increments by 1

var MyVar = 11
myVar--;
// -- decrements by 1

var ourDecimal = 5.7;
var MyDecimal = 0.009;
// anything with a decimal point is a decimal point number

var product = 2.0 * 2.5;
var quotient = 4.4 / 2.2;

var remainder;
remainder = 11 % 3;
// returns the remainder of the division


var a = 3;
var b = 17;
var c = 12;

a += 12; 
b += 9;
c += 7;
// += is equivalent to variable + ...

var a = 11;
var b = 9;
var c = 3;

a -= 6;
b -= 15;
c -= 1;
// -= is equivalent to variable - ...

var a = 5;
var b = 12;
var c = 4.6;

a *= 5; 
b *= 3;
c *= 10;
// *= is equivalent to variable * ...

var a = 48;
var b = 108;
var c = 33;

a /= 12; 
b /= 4;
c /= 11;
// /= is equivalent to variable / ...

var firstName = "Nitish";
// this syntax is used to create a string in JavaScript

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
// \ is an escape character which makes sure that JavaScript understands ur quote and does not show the backslashes

// You can also start your string with single quotes to avoid inner string double quote problems

/* \' single quote
   \" double quote
   \\ backslash
   \n newline
   \r carriage return
   \t tab
   \b backspace
   \f form feed
*/

var outStr = "I come first" + "I come second.";
// You can concatenate strings by using the + operator
// You can also concatenate strings using the += operator
// You can also concatenate strings together with variables


var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
// .length gets the length of thr string

var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];
// slices the first letter of the string

// Strings are immutable but you can change the string itself

var secondLetterOfFirstName = "";
var firstName = "Ada";
secondLetterOfFirstName = firstName[1];
// slices second letter of string

var lastLetterOfFirstName = "";
var firstName = "Ada";
lastLetterOfFirstName = firstName[firstName.length - 1];
// slices the last letter of the string as the lengths start at 0 so length of string - 1 is the last letter
// You can also do the third to last letter and other stuff as well, just subtract accordingly








