//Destructuring

const cliente = {
    nombre: 'Andres',
    tipo: 'Premium',
    datos: {
        ubicacion: {
            pais: 'Mexico',
            ciudad: 'Yuriria'
        },
        targeta: {
            desde: '2007-12-12',
            saldo: 3000
        }
    }
}

console.log(cliente);

let {nombre} = cliente;
let {datos:{ubicacion:{pais}}} = cliente;
//let {nombre, tipo} = cliente;

console.log(pais);