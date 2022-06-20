const animals = new Set();
console.log(animals);
let addAnimal = animal => {
    return animals.add(animal);
}
let hasExist = animal=>{
    return animals.has(animal) ? `Đã có ${animal} trong sở thú` : `Chưa có ${animal} trong sở thú`
}
let deleteAnimal = animal => {
    return animals.delete(animal);
}
let showAnimal = () => {
    animals.forEach(animal => {
        console.log(animal)
    })
}
addAnimal('lion');
addAnimal('elephant');
addAnimal('parrot');
addAnimal('turtle');
showAnimal();
console.log(hasExist('lion'));
console.log(hasExist('a'));
console.log(animals);
