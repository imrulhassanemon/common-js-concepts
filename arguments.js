function sum (a, b, c){
    console.log(arguments)
    const arg = [...arguments]
    arg.push(50);
    console.log(arg)
    return a + b + c
}

const  sumi = sum(20, 20, 20);
console.log(sumi)