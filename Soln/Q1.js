/*
Q1. Write a function to execute two tasks one after the other. Task B will execute Task A
after 10 min. using a promise?
*/

const task1 = () => 
{
    return new Promise((resolve,reject) =>
    {
    console.log("A");
    setTimeout(() => 
    {
      resolve();
      reject();
    }, 600*1000); // 10 minutes
    });
}
  
task1().then(() => 
{
    task2();
}).catch(()=>
{
    console.log("error")
})
  
const task2 = () =>
{
    console.log("B")
}  

/*
O/P :
A
B (After 10 min when 1st task had been done i.e A) 
*/