$(document).ready(function() {
    const asesorias = [
         {materia: "Algoritmos y Lenguajes de Programación", profesor: "Dionisio Navarrete Baloes\ndionisio.nb@cdjuarez.tecnm.mx", lun:"10:00 a 11:00", mar:"10:00 a 11:00", mie:"10:00 a 11:00", jue:"10:00 a 11:00", vie:"10:00 a 11:00", lugar: "Edificio de Sistemas Cubículo 9"}
       
       


       
    ];

    function renderAsesorias(lista) {
        $('#lista-asesorias').empty();
        lista.forEach(a => {
            $('#lista-asesorias').append(`
                <tr>
                    <td>${a.materia}</td>
                    <td>${a.profesor}</td>
                     <td>${a.lun}</td>
                     <td>${a.mar}</td>
                     <td>${a.mie}</td>
                     <td>${a.jue}</td>
                     <td>${a.vie}</td>
                     <td>${a.lugar}</td>
                </tr>
            `);
        });
    }

    $('#search').on('keyup', function() {
        let value = $(this).val().toLowerCase();
        let filtered = asesorias.filter(a => 
            a.materia.toLowerCase().includes(value) || 
            a.profesor.toLowerCase().includes(value)
        );
        renderAsesorias(filtered);
    });

    renderAsesorias(asesorias);
});
