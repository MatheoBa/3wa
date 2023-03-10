const populations = [
        {
            id: 0,
            name: "Alan",
            jobs: ["dev junior", "dev fullstack"],
            password: "tyeedsa00",
        },

        { id: 1, name: "Albert", jobs: ["doctor"], password: "Axgkj00Kl" }, //tyeidii00

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


// nb de doc
const doctors = populations.filter(person => person.jobs && person.jobs.includes("doctor"));
console.log("Docteurs: ", doctors.length);


// nom dev fullstack
console.log("---------");
const fullstackDevNames = populations.filter(person => person.jobs && person.jobs.includes("dev fullstack")).map(person => person.name);
console.log("Dev FS: ", fullstackDevNames);


// nom des chomeurs
console.log("---------");
const unemployedNames = populations.filter(person => !person.jobs).map(person => person.name);
console.log("Chômeurs: ", unemployedNames);


// nb de lettres / chiffres du mdp
console.log("---------");
populations.forEach(({name, password}) => {
    const count = password ? [...password].reduce((acc, letter) => (acc[letter] = acc[letter] ? acc[letter] + 1 : 1, acc), {}) : "Aucun MDP";
    console.log(`${name}'s password:`, count);
})

//mdp lettres unique
console.log("---------");
const uniquePasswords = populations.filter(({password}) => password && (new Set(password.match(/[a-zA-Z]/g)).size === password.match(/[a-zA-Z]/g).length));
console.log("Mots De Passe avec lettres unique:")
uniquePasswords.forEach(({name, password}) => console.log(name, password));

//mdp avec 00
console.log("---------");
const ooPassword = populations.filter(({password}) => password && new Set(password.match("0")).size === 1);
console.log("Mots De Passe avec 00:")
ooPassword.forEach(({name, password}) => console.log(name, password));


//mdp identiques:
console.log("---------");
const duplicatePasswords = populations.reduce((acc, {name, password}) => password ? {...acc, [password]: acc[password] ? [...acc[password], name] : [name]} : acc, {});
Object.entries(duplicatePasswords).forEach(([password, names]) => names.length > 1 && console.log(password, names.join(", ")));






