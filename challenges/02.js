const DataStudents = [
    [
        "s1",
        {
            name: "Alice",
            mention: "",
            notes: [11, 12, 18],
            average: null,
            url: "http://lorempixel.com/100/100/cats/1",
        },
        ],
    [
        "s2",
        {
            name: "Alan",
            mention: "",
            notes: [10, 14.5, 11],
            average: null,
            url: "http://lorempixel.com/100/100/cats/2",
        },
        ],
    [
        "s3",
        {
            name: "Bernard",
            mention: "",
            notes: [11, 9, 9],
            average: null,
            url: "http://lorempixel.com/100/100/cats/2",
        },
        ],
    [
        "s4",
        {
            name: "Naoudi",
            mention: "",
            notes: [14.5, 19, 18],
            average: null,
            url: "http://lorempixel.com/100/100/cats/3",
        },
        ],
    [
        "s5",
        {
            name: "Fenley",
            mention: "",
            notes: [9, 7, 11],
            average: null,
            url: "http://lorempixel.com/100/100/cats/4",
        },
        ],
    [
        "s6",
        {
            name: "Shere Khan",
            mention: "",
            notes: [],
            average: null,
            url: "http://lorempixel.com/100/100/cats/4",
        },
        ],
    ];

// création du Map
const dataStMap = new Map(DataStudents);


// moyenne

function determineAverage(notes) {
    if(notes.length === 0) return null;
    return (notes.reduce((a,b) => a + b, 0) / notes.length).toFixed(2)
}

dataStMap.forEach(student => student.average = determineAverage(student.notes));
dataStMap.forEach(student => console.log(`Moyenne ${student.name}: `, student.average))

// mention
console.log("------");

function determineMention(medium) {
    switch (true) {
        case medium >= 17: return "TB";
        case medium >= 14: return "B";
        case medium >= 12: return "AB";
        case medium >= 10: return "P";
        default: return "";
    }
}

dataStMap.forEach(student => student.mention = determineMention(student.average));
dataStMap.forEach(student => console.log(`Mention ${student.name}: `, student.mention));


// add student
console.log("------");

function addStudent(name, notes) {
    let key = 1;
    while(dataStMap.has(`s${key}`)) key++;
    const newStudent = {
        name: name,
        mention: determineMention(determineAverage(notes)),
        notes: notes,
        average: determineAverage(notes),
        url: "http://lorempixel.com/100/100/cats/4"
    }
    dataStMap.set(`s${key}`, newStudent);
    console.log(`Etudiant ${name} ajouté avec la clé: `, `s${key}`);
}

addStudent("Robert", [17, 5, 7.1, 8]);

console.log("--------------------")

console.log(dataStMap);













