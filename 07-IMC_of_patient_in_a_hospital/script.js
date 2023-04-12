/*
Descobrindo o imc de cada paciente atravez de uma função:
*/



const patients = [
    {
        name: 'Alexandra',
        age: 22,
        weight: 70,
        height: 1.70,
    },
    {
        name: 'Luiz',
        age: 18,
        weight: 90,
        height: 1.80,
    },
    {
        name: 'Vanessa',
        age: 27,
        weight: 68,
        height: 1.60,
    },
]


function printPatientIMC(patient) {
    alert(`Paciente ${patient.name} possui o IMC de: ${(patient.weight/patient.height**2).toFixed(2)}`)
}

for(let patient of patients) {
    printPatientIMC(patient)
}

