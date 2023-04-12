const patients = [
    {
        name: 'Alexandra',
        age: 22,
        weight: 70,
        height: 170,
    },
    {
        name: 'Luiz',
        age: 22,
        weight: 70,
        height: 170,
    },
    {
        name: 'Vanessa',
        age: 22,
        weight: 70,
        height: 170,
    },
]


let patientsNames = []

for(let patient of patients) {
    patientsNames.push(patient.name)
}

console.log(patientsNames)
