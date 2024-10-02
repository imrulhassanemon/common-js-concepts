function add1(){
    let re1 = 0;
    return function(){
        re1 ++
        return re1
    }
}

const add = add1()
console.log(add())
console.log(add())
console.log(add())
console.log(add())
const add2 = add1()
console.log(add2());
console.log(add2());
console.log(add())
console.log(add())
console.log(add2());