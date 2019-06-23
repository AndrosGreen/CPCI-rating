// operador ternario
// let loged = true;
// console.log( loged ? 'Positivo':'Negativo'  );
// switch

const equipos = ['Manchester Ud','Chivas','Barcelona','Napoli'];

// for(let i=0; i<equipos.length; i++){
//     console.log(`Equipo: ${equipos[i]}`);
// }

// for each

// for(equipo of equipos){
//     console.log('Mi equipo es : ' + equipo);
// }

// info of Object

let automovil = {
    modelo: 'Camaro',
    motor: 6
}

for(info of Object.values(automovil) ){
    console.log(info);
}

// equipos.forEach(function(tarea){
//     console.log(tarea);
// });

equipos.map(tarea =>
    console.log(tarea) 
);