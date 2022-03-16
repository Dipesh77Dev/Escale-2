/*
Q4. What will be the value of line1 and line2 ?

function foo() {
let a = b = 0;
a++;
return a;
}
foo();
typeof a; // line1 => ???
typeof b; // line2 => ???
*/

function foo() {
    let a = b = 0;
    a++;
    return a;
    }
    foo();
    (typeof a); // line1 => undefined
    (typeof b); // line2 => number
