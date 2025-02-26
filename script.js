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
                <div class="col-md-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${a.materia}</h5>
                            <p class="card-text"><strong>Profesor:</strong> ${a.profesor}</p>
                            <p class="card-text"><strong>Correo:</strong> ${a.correo}</p>
                            <p class="card-text"><strong>Horario:</strong> ${a.horario}</p>
                            <p class="card-text"><strong>Lugar:</strong> ${a.lugar}</p>
                        </div>
                    </div>
                </div>
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