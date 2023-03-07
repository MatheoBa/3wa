const populations = [
    { id: 0, name: "Alan" },
    { id: 1, name: "Albert" },
    { id: 2, name: "Jhon" },
    { id: 3, name: "Brice" },
    { id: 4, name: "Alexendra" },
    { id: 5, name: "Brad" },
    { id: 6, name: "Carl" },
    { id: 7, name: "Dallas" },
    { id: 8, name: "Dennis" },
    { id: 9, name: "Edgar" },
    { id: 10, name: "Erika" },
    { id: 11, name: "Isaac" },
    { id: 12, name: "Ian" },
    ];

// du plus grand nom
populations.sort((a, b) => b.name.length - a.name.length);
console.log(populations)

// ajout longueur
console.log("------");
populations.map((person) => person.lenName = person.name.length);
console.log(populations);

// gouper
console.log("------");
const groupNames = Object.values(populations.reduce((acc, {id, name, lenName}) => ((acc[lenName] = acc[lenName] || []).push({id, name, lenName}), acc), [])).filter(arr => arr.length > 0);
console.log(groupNames);

// relations
console.log("------");
const relations = [
    { id: 0, relation: [1, 2, 4] },
    { id: 3, relation: [7, 8] },
    { id: 4, relation: [2, 7, 8, 11] },
    { id: 5, relation: [1, 2, 4] },
    { id: 7, relation: [2, 3, 5, 9] },
    { id: 9, relation: [1, 2, 4, 8, 11] },
    { id: 11, relation: [1, 2, 9, 10] },
    ];

const personWithMostRelations = populations
  .map(person => ({
      ...person,
      relations: relations
      .filter(rel => rel.relation.includes(person.id))
      .flatMap(rel => rel.relation.filter(id => id !== person.id))
      .filter((id, i, arr) => arr.indexOf(id) === i)
  }))
  .sort((a, b) => b.relations.length - a.relations.length)[0];

console.log(personWithMostRelations.name, personWithMostRelations.relations.length);
