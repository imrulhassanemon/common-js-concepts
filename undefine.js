/* 
    8 ways to get undefine 
    1. variable that is not initialized will give undefined
    2. function with no return . 
    3. parameter that will not passed will be undefined
    4. if return has nothing on the right will return undefined 
    5. property that dosen't exists on an object will give you undefined 
    6. accessing array elements outside of the index range wil give you undefined
    7. deleting an element inside an array.
    8. set a value directly undefine

*/

// it will return undefined because there is no variable value
let a;
// console.log(a);

// it will return undefined because there is no return 
const sum = ((x, y) => {
    const sum = x + y;

})

const summ = sum(2, 3)
// console.log(summ)


// it will return undefined because parameter is not passed 
function plus(x, y, z){
    // const plus = x + y + z;
    console.log(x, y, z)
}

// plus(2, 4);


// it will undefined because there is no return right side 
function minus(a, b){
    if(a < 0 || b < 0 ){
        return
    }
    return a + b;
}
const min = minus(2, -5)
// console.log(min)


// It show undefined because the salary object property is missing 
const company = {name:'monster lab', job: "software engineer"}
// console.log(company.salary)


// It show undefined because accessing array elements outside of the index range
const arr = [2, 4, 12, 24, 17];
delete arr[2] // you should not do it insted use splice 
console.log(arr[2], arr[5], arr[200]);
console.log(arr)

