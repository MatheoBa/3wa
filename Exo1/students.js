const students = [
    {
        name: "Alan",
        family: {
            mother: "Yvette",
            father: "Paul",
            sister: "Sylvie",
        },
        age: 35,
    },
    {
        name: "Bernard",
        family: {
            mother: "Martine",
            father: "Cécile",
            sister: "Sophie",
        },
        age: 55,
    },
    ];

//for(const student of students) {
//    console.log(`Nom: ${student.name}`, `Soeur: ${student.family.sister}`);
//}

students.forEach(student => console.log(`Nom: ${student.name}`, `Soeur: ${student.family.sister}`))