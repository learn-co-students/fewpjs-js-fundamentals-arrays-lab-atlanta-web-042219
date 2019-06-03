
const append = ["Milo", "Otis", "Garfield"]
const prepend = ["Milo", "Otis", "Garfield"]
const removeLast = ["Milo", "Otis", "Garfield"]
const removeFirst = ["Milo", "Otis", "Garfield"]


append.push("Odie")
prepend.unshift("Odie")
removeLast.pop(-1)
removeFirst.shift(0)
// function append(name){
//   return [...pets, "Odie"];
// }
//
// function prepend(name){
//   return [name,...pets];
// }
//
// function removeLast(name){
//   return pets.slice(0,drivers.length-1);
// }
//
// function removeFirst(name){
//   return pets.slice(1);
// }
