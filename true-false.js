/* 
Thuthy value:
1. true. 
2. any number positive and negitave except  0.
3. any string infacet spce except empty string. 
4. '0'
5. object. {}
6. array. []




Falsy value: 
1. false
2. 0
3. ''
4. undefined.
5. null. 

*/


const x = ' ';

if(x){
    console.log("this is truthy value.")
}
else{
    console.log("this is flasy value.")
}


// check falsy

const y = null;
if(!y){
    console.log("falsy")
}


// check truthy 

const z = ' ';
if(!!z){
    console.log("true")
}