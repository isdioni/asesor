$(document).ready(function() {
    const asesorias = [
{ materia: "Administración de redes",profesor: "Marisela Palacios Reyes",correo:"marisela.pr@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 14:00 a 15:00",lugar:"Sala de maestros 700´s"},	
{ materia: "Algoritmos y Leng. de Programación",profesor: "Dionisio Navarrete Baloés",correo:"dionisio.nb@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Algoritmos y Leng. de Programación",profesor: "Flora M. Trejo C.",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"L - J 9 a 10 a.m.   Viernes 8 a 10 a.m",lugar:"L - J  Sala de Maestros 100´s  /   Viernes Cubículo Sistemas"},	
{ materia: "Algoritmos y Leng. de Programación",profesor: "Martha Araceli Castañeda Parra",correo:"martha.cp@cdjuarez.tecnm.mx",horario:"Lunes a Viernes   de 13:00 a 14:00 ",lugar:"Sala de maestros 700´s"},	
{ materia: "Algoritmos y Programación",profesor: "Dionisio Navarrete Baloés",correo:"dionisio.nb@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Arquitectura de Computadoras",profesor: "Flora M. Trejo C.",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"L - J 9 a 10 a.m.   Viernes 8 a 10 a.m",lugar:"L - J  Sala de Maestros 100´s  /   Viernes Cubículo Sistemas"},	
{ materia: "Base de Datos para Ing. Logística",profesor: "Elisa Dania Molina Portillo",correo:"elisa.mp@cdjuarez.tecnm.mx",horario:"Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 700´s"},	
{ materia: "Base de Datos para Ing. Logística",profesor: "Martha Araceli Castañeda Parra",correo:"martha.cp@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 13:00 a 14:00 ",lugar:"Sala de maestros 700´s"},	
{ materia: "Conmutacion",profesor: "Marisela Palacios Reyes",correo:"marisela.pr@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 14:00 a 15:00",lugar:"Sala de maestros 700´s"},	
{ materia: "Estructura de Datos",profesor: "Diana Angélica Bañuelos Delgado",correo:"diana.bd@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Estructura de Datos",profesor: "María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a Viernes  de 14:00 a 15:00 ",lugar:"Cubículo No. 6 Sistemas y Computación"},	
{ materia: "Fundamentos de base de datos y ",profesor: "Anita Loya Lozoya",correo:"anita.ll@cdjuarez.tecnm.mx",horario:"Lunes a jueves 9 a 10 hrs y Lunes a viernes de 14 a 15 hrs",lugar:"Sala de maestros 700´s Cubículo de sistemas"},	
{ materia: "Fundamentos de Bases de datos",profesor: "Flora M. Trejo C.",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"L - J  9 a 10 a.m.  Viernes 8 a 10 a.m.",lugar:"L - J  Sala de Maestros 100´s  /   Viernes Cubículo Sistemas"},	
{ materia: "Fundamentos de Bases de datos",profesor: "Rosa Castañeda Monárrez",correo:"rosa.cm@cdjuarez.tecnm.mx",horario:"Lunes a Viernes  de 15:00 a 16:00",lugar:"Cubículo No. 6  Sistemas y Computación"},	
{ materia: "Fundamentos de Ciberseguridad",profesor: "José Hilario Partida Torres",correo:"jose.pt@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 15:00 a 17:00 horas",lugar:"Sala multimeda"},	
{ materia: "Fundamentos de Programacion",profesor: "Ludivina Toral Aguilar",correo:"ludivina.ta@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 10:00 a 11:00",lugar:"Sala de maestros 700´s"},	
{ materia: "Fundamentos de Programación",profesor: "María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a Viernes  de 14:00 a 15:00 ",lugar:"Cubículo No. 6  Sistemas y Computación"},	
{ materia: "Gestion de proyectos de software",profesor: "Margarita Bailon Estrada",correo:"margarita.be@cdjuarez.tecnm.mx",horario:"Viernes 18:00 a 19:00",lugar:"Cubiculo 1 Ed Guillot"},	
{ materia: "Graficación",profesor: "Noé Ramón Rosales Morales",correo:"noe.rm@cdjuarez.tecnm.mx",horario:"Miercoles y Jueves 12:00-13:00",lugar:"Cubículo CA Sistemas y Computación"},	
{ materia: "Informática para la Administración",profesor: "Claudia Anglés Barrios",correo:"claudia.ab@cdjuarez.tecnm.mx",horario:"Viernes 13:00 a 14:00 hrs",lugar:"Sala de maestros 700´s"},	
{ materia: "Informática para la Administración",profesor: "Rosa Castañeda Monárrez",correo:"rosa.cm@cdjuarez.tecnm.mx",horario:"Viernes 10:00-11:00",lugar:"Cubículo No. 6  Sistemas y Computación"},	
{ materia: "Ingeniería de Software",profesor: "Magarita Bailon Estrada",correo:"margarita.be@cdjuarez.tecnm.mx",horario:"Viernes 13:00 a 14:00 hrs",lugar:"Cubiculo 1 Ed Guillot"},	
{ materia: "Introducción a la programación",profesor: "Dionisio Navarrete Baloés",correo:"dionisio.nb@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Lenguajes Y Autómatas I",profesor: "Diana Angélica Bañuelos Delgado",correo:"diana.bd@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Matemáticas Discretas",profesor: "Diana Angélica Bañuelos Delgado",correo:"diana.bd@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Matemáticas Discretas Ii ",profesor: "Diana Angélica Bañuelos Delgado",correo:"diana.bd@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 11:00 a 12:00 hrs",lugar:"Sala de maestros 100's"},	
{ materia: "Prog. Estructurada",profesor: "Elisa Dania Molina Portillo",correo:"elisa.mp@cdjuarez.tecnm.mx",horario:"Viernes 13:00 a 14:00 hrs",lugar:"Sala de maestros 700´s"},	
{ materia: "Programación",profesor: "Elisa Dania Molina Portillo",correo:"elisa.mp@cdjuarez.tecnm.mx",horario:"Viernes 13:00 a 14:00 hrs",lugar:"Sala de maestros 700´s"},	
{ materia: "Programación Básica",profesor: "Elisa Dania Molina Portillo",correo:"elisa.mp@cdjuarez.tecnm.mx",horario:"Viernes 13:00 a 14:00 hrs",lugar:"Sala de maestros 700´s"},	
{ materia: "Programación Básica",profesor: "María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a Viernes   de 14:00 a 15:00 ",lugar:"Cubículo No. 6 Sistemas y Computación"},	
{ materia: "Programación II",profesor: "Flora M. Trejo C.",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"L - J 9 a 10 a.m. Viernes 8 a 10 a.m",lugar:"L - J  Sala de Maestros 100´s  /   Viernes Cubículo Sistemas"},	
{ materia: "Programación Orientada a Objetos",profesor: "Claudia Anglés Barrios",correo:"claudia.ab@cdjuarez.tecnm.mx",horario:"Lunes 8:00 a 9:00",lugar:"Sala de maestros 700´s"},	
{ materia: "Programación Orientada a Objetos",profesor: "María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 14:00 a 15:00 ",lugar:"Cubículo No. 6 Sistemas y Computación"},	
{ materia: "Redes de computadoras",profesor: "Marisela Palacios Reyes",correo:"marisela.pr@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 14:00 a 15:00",lugar:"Sala de maestros 700´s"},	
{ materia: "Redes de Computadoras Tic’s",profesor: "Hector Alfredo sanchez sanchez",correo:"hector.ss@cdjuarez.tecnm.mx",horario:"Viernes 14:00 a 15:00",lugar:"Sala de maestros 700´s"},	
{ materia: "Redes Emergentes",profesor: "José Hilario Partida Torres",correo:"jose.pt@cdjuarez.tecnm.mx",horario:"Lunes a Viernes 15:00 a 17:00 horas",lugar:"Sala multimeda"},	
{ materia: "Software de aplicación ejecutivo",profesor: "Claudia Anglés Barrios",correo:"claudia.ab@cdjuarez.tecnm.mx",horario:"Lunes  9:00 a 10:00 hrs",lugar:"Sala de maestros 700´s"},	
{ materia: "Software de aplicación ejecutivo",profesor: "Rosa Castañeda Monárrez",correo:"rosa.cm@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 15:00 a 16:00",lugar:"Cubículo No. 6  Sistemas y Computación"},	
{ materia: "Taller de Sistemas Operativos",profesor: "Noé Ramón Rosales Morales",correo:"noe.rm@cdjuarez.tecnm.mx",horario:"Lunes y Martes 12:00-13:00",lugar:"Cubículo CA Sistemas y Computación"},	
{ materia: "Tópicos avanzados de programación",profesor: "Anita Loya Lozoya",correo:"anita.ll@cdjuarez.tecnm.mx",horario:"Lunes a jueves 9 a 10 hrs y Lunes a viernes de 14 a 15 hrs",lugar:"Sala de maestros 700´s Cubículo de sistemas"},	
{ materia: "Virtualizacion",profesor: "Marisela Palacios Reyes",correo:"marisela.pr@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 14:00 a 15:00",lugar:"Sala de maestros 700's"}


       
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
