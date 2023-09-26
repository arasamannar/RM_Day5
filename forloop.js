//for given JSON iterate over for all for loops.
//1. using for loop

let loop = {
    "name": "arasa",
    "course": "FSD",
    "year": 2017
}
let keys = Object.keys(loop);
let value = Object.values(loop);
for (let i=0; i<keys.length; i++)
{
    console.log("1--", keys[i], value[i]);
}
//2. using for in loop

for (let s in loop)
{
    console.log("2--",loop[s]);
}

//3. using forEach loop

Object.entries(loop).forEach(([key, value]) => {
        console.log("3--",`${key} ${value}`);
    });

//4. using for of loop

for (const [key, value1] of Object.entries(loop)) {
    console.log("4--",`${key}: ${value1}`);
  }