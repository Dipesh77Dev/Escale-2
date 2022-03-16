/*
Q2. What is output of following code:

const promise = new Promise(res => res(2));
promise.then(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
return v * 2;
})
.finally(v => {
console.log(v);
return v * 2;
})
.then(v => {
console.log(v);
});
*/

const promise = new Promise(res => res(2));
promise.then(v => {
console.log(v);  // 2 (res = 2)
return v * 2;
})
.then(v => {
console.log(v);  // 4 (res = v * 2 = 2 * 2 = 4)
return v * 2;
})
.finally(v => {
console.log(v);  // undefined - because(The finally block doesn’t receive any value)
return v * 2;
})
.then(v => {
console.log(v);  // 8 , (The finally block doesn’t receive any value, and anything returned from finally is not considered in the then block, so the output from the last then is used. so output in then will be 4 * 2 = 8)
});

/*
O/p:
2
4
undefined
8
*/