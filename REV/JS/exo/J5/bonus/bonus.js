const all = (array, condition) => array.every(condition);

console.log(all([2,4,6], (e) => e % 2 === 0));
console.log(all([2,3,4], (e) => e % 2 === 0));

const withIndex = (array) => array.map((val, index) => [index, val]);

console.log(withIndex(["a", "b", "c"]));

// i (index) % size, si c'est 0, ont crée un nouveau tableau, sinon on l'ajoute au tableau precedent
const chunkEvery = (arr, size) => arr.reduce((acc, val, i) => (i % size ? acc[acc.length - 1].push(val) : acc.push([val])) && acc, []);


console.log(chunkEvery([1, 2, 3, 4, 5, 6], 2));

