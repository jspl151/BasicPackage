const {map,values} = require('@laufire/utils/collection');

const population = 
{
  male :50,
  female :45,
  others :5
}
const data = values(map(population,human => human+10));

console.log(data);
{
  male : {value : 50},
  female : {value :45},
  others : { value : 5}
}