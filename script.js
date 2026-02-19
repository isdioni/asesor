$(document).ready(function() {
    const asesorias = [
         {materia: "Algoritmos y Lenguajes de Programación", profesor: "Dionisio Navarrete Baloes\n dionisio.nb@cdjuarez.tecnm.mx", horario: "Lunes a Viernes 10:00 a 11:00 hrs", lugar: "Edificio de Sistemas Cubículo 9"}
       
       


       
    ];

    function renderAsesorias(lista) {
        $('#lista-asesorias').empty();
        lista.forEach(a => {
            $('#lista-asesorias').append(`
                <tr>
                    <td>${a.materia}</td>
                    <td>${a.profesor}</td>
                    
                    <td>${a.horario}</td>
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
