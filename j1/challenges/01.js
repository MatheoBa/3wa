const populations = [
        {
            id: 0,
            name: "Alan",
            jobs: ["dev junior", "dev fullstack"],
            password: "tyeedsa00",
        },

        { id: 1, name: "Albert", jobs: ["doctor"], password: "tyeidii00" },

        {
            id: 2,
            name: "Jhon",
            jobs: ["mathematician", "doctor"],
            password: "xyuuuoi00",

        },
        { id: 3, name: "Brice", jobs: ["dev fullstack"], password: "xytoiab00" },
        { id: 4, name: "Alexendra", jobs: ["dentist"], password: "aaaoiab33" },
        { id: 5, name: "Brad" },
        { id: 6, name: "Carl", jobs: ["lead dev", "dev fullstack"] },
        { id: 7, name: "Dallas", jobs: ["dev fullstack"] },
        { id: 8, name: "Dennis", jobs: ["integrator", "dev fullstack"] },
        { id: 9, name: "Edgar", jobs: ["mathematician"] },
        { id: 10, name: "Erika", jobs: ["computer scientist", "mathematician"] },
        { id: 11, name: "Isaac", jobs: ["doctor"], password: "Axgkj22Kl" },
        { id: 12, name: "Ian", password: "Axgkj00Kl" },
    ];


const doctors = populations.filter(person => person.jobs && person.jobs.includes("doctor"));
console.log("Docs: ", doctors.length);

console.log("---------");

const fullstackDevNames = populations.filter(person => person.jobs && person.jobs.includes("dev fullstack")).map(person => person.name);
console.log("Dev FS: ", fullstackDevNames);

console.log("---------");

const unemployedNames = populations.filter(person => !person.jobs).map(person => person.name);
console.log("Chômeurs: ", unemployedNames);

console.log("---------");

populations.map((person) => {
    const password = person.password;
    const count = {};
    if(password) password.split('').forEach(letter => count[letter] = count[letter] ? count[letter] + 1 : 1);
    console.log(" ");
    console.log(`${person.name}'s password :`, count);
});


console.log("---------");

const filteredPassword = populations.filter(person => person.password && )