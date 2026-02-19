$(document).ready(function() {
    const asesorias = [
        
{materia: "Administración de Base de Datos", profesor: "Dionisio Navarrete Baloes dionisio.nb@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 8:00 a 9:00 hrs, Viernes de 11:00 a 12:00",lugar:"Edificio de Sistemas Cubiculo 9"},
{materia: "Administración de Base de Datos", profesor: "Juan Carlos Pizarro Martínez juan.pm@cdjuarez.tecnm.mx",horario: "Lunes a Viernes 14:00 a 15:00 hrs",lugar:"Centro de Cómputo"},
{materia: "Administración de Proyectos ", profesor: "Margarita Bailon Estrada Margarita Bailon Estrada",horario: "Margarita Bailon Estrada",lugar:"Cubiculo 1 Ed Guillot"},
{materia: "Administración y Tecnicas de Mantenimiento", profesor: "Elisa Dania Molina Portillo elisa.mp@cdjuarez.tecnm.mx",horario: "Miercoles y Viernes 14:00 a 15:00 hrs",lugar:"Edificio de Sistemas Cubiculo 1"},
{materia: "Algoritmos y Lenguajes de programacion", profesor: "GALLEGOS BORUNDA ALMA PATRICIA alma.gb@cdjuarez.tecnm.mx",horario: "Martes 8:00 a 9:00 am",lugar:"Cubiculo 6  DSC"},
{materia: "Algoritmos y Programación", profesor: "Elisa Dania Molina Portillo elisa.mp@cdjuarez.tecnm.mx",horario: "Miercoles y Viernes 14:00 a 15:00 hrs",lugar:"Edificio de Sistemas Cubiculo 1"},
{materia: "Analítica de datos", profesor: "Dora Ivette Rivero Caraveo dora.rc@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 11:00 a 12:00",lugar:"NCIE"},
{materia: "Arquitectura de Computadoras", profesor: "Flora Mayela Trejo Castillo flora.tc@cdjuarez.tecnm.mx",horario: "  Lunes a Viernes 8 a 9 y 15 a 14",lugar:"Cubículo 4 / Sala maestros"},
{materia: "Base de Datos", profesor: "Dionisio Navarrete Baloes dionisio.nb@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 8:00 a 9:00 hrs, Viernes de 11:00 a 12:00",lugar:"Edificio de Sistemas Cubiculo 9"},
{materia: "Estructura de Datos", profesor: "Marìa Eugenia Sànchez Leal maria.slcdjuarez,tecnm.mx",horario: "Lunes a Jueves 10:00 a 11:00 hrs",lugar:"Cubìculo 6 DSC"},
{materia: "Fundamentos de Bases de Datos", profesor: "Flora Mayela Trejo Castillo flora.tc@cdjuarez.tecnm.mx",horario: "  Lunes a Viernes 8 a 9 y 15 a 14",lugar:"Cubículo 4 / Sala maestros"},
{materia: "Fundamentos de Ingenieria de Software", profesor: "Dionisio Navarrete Baloes dionisio.nb@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 8:00 a 9:00 hrs, Viernes de 11:00 a 12:00",lugar:"Edificio de Sistemas Cubiculo 9"},
{materia: "Fundamentos de programación", profesor: "Verónica Farías Veloz veronica.fv@cdjuarez.tecnm.mx",horario: "lunes a jueves 7-8 y 10-11",lugar:"Cubiculo 2 Depto Sistemas"},
{materia: "Fundamentos de Programaciòn", profesor: "Marìa Eugenia Sànchez Leal maria.slcdjuarez,tecnm.mx",horario: "Lunes a Jueves 10:00 a 11:00 hrs",lugar:"Cubìculo 6 DSC"},
{materia: "Fundamentos de Programaciòn", profesor: "LudivinaToral Aguilar ludivina.ta@cdjuarez.tecnm.mx",horario: " 8:00 a 9:00",lugar:"Sala de maestros de Sist y Comp"},
{materia: "Fundamentos de Telecomunicaciones ", profesor: "José Hilario PartidaTorres jose.pt@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 10:00 a 11:00",lugar:"Centro de Información"},
{materia: "Gestion de proyectos de software", profesor: "Margarita Bailon Estrada margarita.be@cdjuarez.tecnm.mx",horario: "De lunes a viernes de 12:00 a 13:00",lugar:"Cubiculo 1 Ed Guillot"},
{materia: "Informática para la Administración", profesor: "Elisa Dania Molina Portillo elisa.mp@cdjuarez.tecnm.mx",horario: "Miercoles y Viernes 14:00 a 15:00 hrs",lugar:"Edificio de Sistemas Cubiculo 1"},
{materia: "Ingeniería de Software", profesor: "Anita Loya Lozoya anita.ll@cdjuarez.tecnm.mx",horario: "Lunes a Viernes 12:00 a 13:00 y 15:00 a 16:00",lugar:"Cubículo 4 / Sala maestros 100's"},
{materia: "Introducción a la programación", profesor: "Verónica Farías Veloz veronica.fv@cdjuarez.tecnm.mx",horario: "lunes a jueves 7-8 y 10-11",lugar:"Cubiculo 2 Depto Sistemas"},
{materia: "Introducciòn a la Programaciòn", profesor: "Marìa Eugenia Sànchez Leal maria.slcdjuarez,tecnm.mx",horario: "Lunes a Jueves 10:00 a 11:00 hrs",lugar:"Cubìculo 6 DSC"},
{materia: "Lenguajes y autómas 1", profesor: "Rosa Castañeda  rosa.cm@cdjuarez.tecnm.mx ",horario: "Lunes a viernes 2:00 pm",lugar:"Cubículo 6 en sistemas"},
{materia: "Lenguajes y autómas 2", profesor: "Rosa Castañeda  rosa.cm@cdjuarez.tecnm.mx ",horario: "Lunes a viernes 2:00 pm",lugar:"Cubículo 6 en sistemas"},
{materia: "POO", profesor: "Marìa Eugenia Sànchez Leal maria.slcdjuarez,tecnm.mx",horario: "Lunes a Jueves 10:00 a 11:00 hrs",lugar:"Cubìculo 6 DSC"},
{materia: "Programación Básica", profesor: "Flora Mayela Trejo Castillo flora.tc@cdjuarez.tecnm.mx",horario: "  Lunes a Viernes 8 a 9 y 15 a 14",lugar:"Cubículo 4 / Sala maestros"},
{materia: "Programaciòn Bàsica", profesor: "Marìa Eugenia Sànchez Leal maria.slcdjuarez,tecnm.mx",horario: "Lunes a Jueves 10:00 a 11:00 hrs",lugar:"Cubìculo 6 DSC"},
{materia: "Programación Estructurada", profesor: "Dionisio Navarrete Baloes dionisio.nb@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 8:00 a 9:00 hrs, Viernes de 11:00 a 12:00",lugar:"Edificio de Sistemas Cubiculo 9"},
{materia: "Programación orientada a objetos", profesor: "Verónica Farías Veloz veronica.fv@cdjuarez.tecnm.mx",horario: "lunes a jueves 7-8 y 10-11",lugar:"Cubiculo 2 Depto Sistemas"},
{materia: "Sistemas Operativos", profesor: "GALLEGOS BORUNDA ALMA PATRICIA alma.gb@cdjuarez.tecnm.mx",horario: "Martes 8:00 a 9:00 am",lugar:"Cubiculo 6  DSC"},
{materia: "Sistemas programables", profesor: "Dora Ivette Rivero Caraveo dora.rc@cdjuarez.tecnm.mx",horario: "Lunes a Jueves 11:00 a 12:00",lugar:"NCIE"},
{materia: "Taller de Base de Datos", profesor: "Juan Carlos Pizarro Martínez juan.pm@cdjuarez.tecnm.mx",horario: "Lunes a Viernes 14:00 a 15:00 hrs",lugar:"Centro de Cómputo"},
{materia: "Taller de investigación II", profesor: "Margarita Bailon Estrada Margarita Bailon Estrada",horario: "Margarita Bailon Estrada",lugar:"Cubiculo 1 Ed Guillot"},
{materia: "Topicos Avanzados de programacion", profesor: "Verónica Farías Veloz veronica.fv@cdjuarez.tecnm.mx",horario: "lunes a jueves 7-8 y 10-11",lugar:"Cubiculo 2 Depto Sistemas"},
{materia: "Tópicos avanzados de programación", profesor: "Anita Loya Lozoya anita.ll@cdjuarez.tecnm.mx",horario: "Lunes a Viernes 12:00 a 13:00 y 15:00 a 16:00",lugar:"Cubículo 4 / Sala maestros 100's"}




       


       
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
