/*
--> FILTER ARRAY'S METHOD <--
* it is called on an array
* it takes a function as an argument
* it returns a new array 
* the function passed to filter method is used to test the element contained in the array. Only the elements that pass the test, will be in the new array
*/
const cities = ['NewYork', 'Bali', 'Bangkok', 'Colombo', 'Kathmandu', 'London', 'Rome']
const shortNames = cities.filter(city => city.length < 7);
console.log(shortNames);