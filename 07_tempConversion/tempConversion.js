const convertToCelsius = function(temp) {
  let celcius = (temp-32)*(5/9);
  celcius = celcius.toFixed(1);
  return celcius*1;
};

const convertToFahrenheit = function(temp) {
  let fahren = ((temp*(9/5))+32);
  fahren = fahren.toFixed(1);
  return fahren*1;
};

convertToCelsius(32);
convertToFahrenheit(0)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
