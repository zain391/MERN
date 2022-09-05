// we are going to study all the loops in the js
// while loop
let i=1;
while(i<11){
    console.log(`5 x ${i} = ${5*i}`);
    i++;
}

for(let i=1; i<11 ; i++){
    console.log(`5 x ${i} = ${5*i}`);
}

// now we are moving toward the for in loop
// for (for in loop) we need an object or an iterable
const persons={per1:"zain",per2:"usama"}
for(let x in persons){
    console.log(Object.values(persons));
    console.log(Object.keys(persons));
}
const arr=[1,2,3]
for(let z of arr){
    console.log(`i am working`);
}
console.log(Math.random().toString());