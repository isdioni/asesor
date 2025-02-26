$(document).ready(function() {
    const asesorias = [
        { materia: "Administración de Redes", profesor: "Marisela Palacios Reyes", correo: "marisela.pr@cdjuarez.tecnm.mx", horario: "Lunes a Viernes de 14:00 a 15:00", lugar: "Sala de maestros 700´s" },
        { materia: "Algoritmos y Lenguajes de Programación", profesor: "Dionisio Navarrete Baloés", correo: "dionisio.nb@cdjuarez.tecnm.mx", horario: "Lunes a Viernes de 11:00 a 12:00 hrs", lugar: "Sala de maestros 100’s" },
        { materia: "Base de Datos", profesor: "Elisa Dania Molina Portillo", correo: "elisa.mp@cdjuarez.tecnm.mx", horario: "Viernes de 11:00 a 12:00 hrs", lugar: "Sala de maestros 700´s" }
    ];

    function renderAsesorias(lista) {
        $('#lista-asesorias').empty();
        lista.forEach(a => {
            $('#lista-asesorias').append(`
                <tr>
                    <td>${a.materia}</td>
                    <td>${a.profesor}</td>
                    <td>${a.correo}</td>
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