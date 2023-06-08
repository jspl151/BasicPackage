const animals = ["dog", "cat", "wolf", "lion", "dog", "cat", "wolf", "lion", "dog", "tiger"];

let countObject = animals.reduce((acc,currentValue)=>
 {
    return (
        acc[currentValue] ? acc[currentValue]+1 : (acc[currentValue] = 1),
        acc
    );
},
{});
console.log(countObject);