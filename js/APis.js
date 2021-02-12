alumnos = ['Andros_',
           'alexia_martinez',
           'sggutier',
           'Thanya_Leif',
           'OrlandoIsay',
           'Karyme_Nava',
           'DT3264',
           'magno309',
           'luis8',
           'Isabela_CR',
           'MikeMR',
           'C4rlosVz',
           'Melecichu',
           'AuroraPrz1809',
           'MarioJimenez9'
           ];

function descargarDatos(usuario) {
    console.log('Hola');
    let api = "https://codeforces.com/api/user.info?handles=";
    for(let i=0; i<alumnos.length-1; i++){
        api += (alumnos[i] + ";");
    }
    api += (alumnos[alumnos.length-1] + ";");

    //llamado al Fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(dato => imprimirHTML(dato.result));
}

function compare (a,b){
    return a.rating < b.rating;
}
function comp (a,b){
    return a < b;
}

function imprimirHTML(dato) {

    //console.log(dato);

    let personas = [];
    bu = []; // cubeta para evitar repetidos

    for(let i=0; i<dato.length; i++){
        personas.push( parseInt(dato[i].rating) );
    }

    personas.sort(function(a,b) { return a - b; });
    personas.reverse();

    console.log(typeof personas[1]);

    console.log(personas);

    personas.forEach(p => {
        let usuario;

        

        for(let i=0; i<100; i++){
            bu.push(0);
        }

        let pos = 0;
        for(let i =0; i<dato.length; i++){
            if( p == dato[i].rating && bu[i] == 0){
                usuario = dato[i];
                pos = i;
            }
        }

        bu[pos] = 1;

        const nombre = usuario.handle;
        const ranking = usuario.rating;
        let rank = usuario.rank;

        const tr = document.createElement('tr');

        if(rank == 'candidate master'){
            rank = 'candidate-master';
        }

        tr.innerHTML = `
            <tr>
                <td class="${rank}">  
                    <a href="https://codeforces.com/profile/${nombre}" class="${rank}">${nombre}</a>   
                </td>
                <td> ${ranking} </td>
            </tr>
        `;

        document.querySelector('#tabla').appendChild(tr);
    });



}

descargarDatos('Andros_');