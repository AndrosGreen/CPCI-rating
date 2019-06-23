alumnos = ['Andros_',
           'sggutier',
           'Thanya_Leif',
           'OrlandoIsay',
           'Deyven',
           'DT3264',
           'magno309',
           'luis8',
           'Isabela_CR',
           'MikeMR',
           'C4rlosVz',
           'Melecichu',
           'AuroraPrz1809',
           'alexia_martinez'];

al = ['Andros_'];

function descargarDatos(usuario) {
    console.log('Hola');
    let api = "https://codeforces.com/api/user.info?handles=";
    for(let i=0; i<al.length-1; i++){
        api += (al[i] + ";");
    }
    api += (al[al.length-1] + ";");

    //llamado al Fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(dato => imprimirHTML(dato.result));
}

function imprimirHTML(dato) {

    console.log(dato);

    dato.sort( function(a, b){return a.rating < b.rating} );

    dato.forEach(usuario => {
        //usuario = dato[0];

        //console.log(dato[0]);

        const nombre = usuario.handle;
        const pais = usuario.country;
        const ranking = usuario.rating;
        let rank = usuario.rank;

        const tr = document.createElement('tr');

        if(rank == 'candidate master'){
            rank = 'candidate-master';
        }

        tr.innerHTML = `
            <tr>
                <td class="${rank}">${nombre}</td>
                <td>${pais}</td>
                <td>${ranking}</td>
            </tr>
        `;

        document.querySelector('#tabla').appendChild(tr);
    });



}

descargarDatos('Andros_');