const nb = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10]

 const reduce = nb.reduce((n, i) => n + i);
const reduceOdd = nb.reduce((n, i) => n % 2 ? n + i : n);

console.log("reduce all ", reduce);
console.log("reduce odd", reduceOdd);