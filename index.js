const {map,values,reduce} = require('@laufire/utils/collection');

const marks = [78,98,46,67,38];

const population = 
{
  male : 50,
  female :45,
  others :5
}
const data = values(map(population,human => human));
console.log(data);
const data1 = map(population,human => 
({
  value : human*2 ,
}));
console.log(data1);
const totalPopulation =reduce(population,(acc,cur)=>acc+cur,0);
const total = reduce(marks,(acc,cur)=> 
 ({
    total : acc.total+cur }),{total:0});

console.log(totalPopulation);
console.log(total);
