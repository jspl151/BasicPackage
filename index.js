const {map,values,reduce} = require('@laufire/utils/collection');

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
console.log(totalPopulation);