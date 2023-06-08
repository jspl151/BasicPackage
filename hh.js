const {map,values} = require('@laufire/utils/collection');

const population = 
{
  male : 50,
  female :45,
  others :5
}
const data = values(map(population,human => human));

console.log(data);

//required output in below format
/*{
  male : {value : 50},
  female : {value :45},
  others : { value : 5}
}*/

//const {map} = require('@laufire/utils/collection');

const population1 = 
{
  male : 50,
  female :45,
  others :5
}
const data1 = map(population1,human => 
({
  value : human*2 ,
}));
console.log(data1);
