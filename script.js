$(document).ready(function() {
    const asesorias = [
"{materia: ""Algoritmos y Lenguajes de Programación"",profesor:""Dionisio Navarrete Baloes"",correo:""dionisio.nb@cdjuarez.tecnm.mx"",horario:""Lunes a Viernes 
10:00 a 11:00 hrs"",lugar:""Edificio de Sistemas Cubículo 9""},"
"{materia: "" Fundamentos de Base de Datos"",profesor:""Dionisio Navarrete Baloes"",correo:""dionisio.nb@cdjuarez.tecnm.mx"",horario:""Lunes a Viernes 
10:00 a 11:00 hrs"",lugar:""Edificio de Sistemas Cubículo 9""},"
"{materia: ""Taller de Ingenieria de Software"",profesor:""Dionisio Navarrete Baloes"",correo:""dionisio.nb@cdjuarez.tecnm.mx"",horario:""Lunes a Viernes 
10:00 a 11:00 hrs"",lugar:""Edificio de Sistemas Cubículo 9""},"
"{materia: ""Fundamentos de programación
"",profesor:""Verónica Farías Veloz"",correo:""veronica.fv@cdjuarez.tecnm.mx "",horario:""martes y jueves 
10:00 a 12:00"",lugar:""Edificio de Sistemas, Cubículo 2""},"
"{materia: ""Programación Orientada a Objetos "",profesor:""Verónica Farías Veloz"",correo:""veronica.fv@cdjuarez.tecnm.mx "",horario:""martes y jueves 
10:00 a 12:00"",lugar:""Edificio de Sistemas, Cubículo 2""},"
"{materia: ""Estructura de Datos"",profesor:""Verónica Farías Veloz"",correo:""veronica.fv@cdjuarez.tecnm.mx "",horario:""martes y jueves 
10:00 a 12:00"",lugar:""Edificio de Sistemas, Cubículo 2""},"
{materia: "Lenguajes y autómatas 2",profesor:"Rosa Castañeda",correo:"rosa.cm@cdjuarez.tecnm.mx",horario:"viernes 4 pm",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Lenguajes y autómatas 1",profesor:"Rosa Castañeda",correo:"rosa.cm@cdjuarez.tecnm.mx",horario:"jueves 4 pm",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Cultura empresarial",profesor:"Rosa Castañeda",correo:"rosa.cm@cdjuarez.tecnm.mx",horario:"miércoles 4 pm",lugar:"Edificio de Sistemas, Cubículo 6"},
"{materia: ""Interaccion Humano Computadora"",profesor:""José Hilario Partida"",correo:""jose.pt@cdjuarez.tecnm.mx"",horario:""Lunes a Miercoles 
11:00 a 12:00 hrs"",lugar:""Multimedia""},"
"{materia: ""Administración Seguridad de Redes"",profesor:""José Hilario Partida"",correo:""jose.pt@cdjuarez.tecnm.mx"",horario:""Jueves a Viernes 
11:00 a 12:00 hrs"",lugar:""Multimedia""},"
"{materia: ""Administración de Bases de Datos"",profesor:""Juan Carlos Pizarro Martínez"",correo:""juan.pm@cdjuarez.tecnm.mx"",horario:""Lunes a Viernes
14:00 a 15:00 hrs"",lugar:""Centro de Cómputo""},"
"{materia: ""Bases de Datos Distribuidas"",profesor:""Juan Carlos Pizarro Martínez"",correo:""juan.pm@cdjuarez.tecnm.mx"",horario:""Lunes a Viernes
14:00 a 15:00 hrs"",lugar:""""},"
"{materia: ""Fundamentos de programación"",profesor:""Elisa Dania Molina Portillo"",correo:""elisa.mp@cdjuarez.tecnm.mx
dmolina@itcj.edu.mx"",horario:""Viernes
14:00 a 16:00 hrs"",lugar:""Edificio de Sistemas, Cubículo 3""},"
"{materia: ""
Introducción a la Programación
"",profesor:""Elisa Dania Molina Portillo"",correo:""elisa.mp@cdjuarez.tecnm.mx
dmolina@itcj.edu.mx"",horario:""Viernes
14:00 a 16:00 hrs"",lugar:""Edificio de Sistemas, Cubículo 3""},"
"{materia: ""Administración y técnicas de Manto."",profesor:""Elisa Dania Molina Portillo"",correo:""elisa.mp@cdjuarez.tecnm.mx
dmolina@itcj.edu.mx"",horario:""Viernes
14:00 a 16:00 hrs"",lugar:""Edificio de Sistemas, Cubículo 3""},"
{materia: "Algoritmos y Lenguajes de Programación",profesor:"Flora Mayela Trejo Castillo",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"Lunes a Jueves 11:00-12:00     Viernes 13:00-14:00",lugar:"Edificio de Sistemas, Cubículo 4"},
{materia: " Arquitectura de Comptuadoras",profesor:"Flora Mayela Trejo Castillo",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"Lunes a Jueves 11:00-12:00     Viernes 13:00-14:00",lugar:"Edificio de Sistemas, Cubículo 4"},
{materia: "Algoritmos y Programación",profesor:"Flora Mayela Trejo Castillo",correo:"flora.tc@cdjuarez.tecnm.mx",horario:"Lunes a Jueves 11:00-12:00     Viernes 13:00-14:00",lugar:"Edificio de Sistemas, Cubículo 4"},
{materia: "Redes de Computadoras",profesor:"Hector Alfredo Sanchez Sanchez",correo:"hector.ss@cdjuarez.tecnm.mx",horario:"Lunes a Viernes de 13:00 a 14:00",lugar:"Sistemas y Computación"},
{materia: "Programación Orientada a Objetos ",profesor:"María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a  Viernes de 14:00 a 15:00",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Estructura de Datos",profesor:"María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a  Viernes de 14:00 a 15:00",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Programación Básica",profesor:"María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a  Viernes de 14:00 a 15:00",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Fundamentos de Programación",profesor:"María Eugenia Sánchez Leal",correo:"maria.sl@cdjuarez.tecnm.mx",horario:"Lunes a  Viernes de 14:00 a 15:00",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Desarrollo de Aplicaciones para Dispositivos Móviles",profesor:"Jaime Alonso Ramos Silva",correo:"jaime.rs@cdjuarez.tecnm.mx",horario:"Lunes a Viernes15:00 a 16:00 hrs.",lugar:"Cubículo 2 - Edificion Guillot"},
{materia: "Seguridad Informática",profesor:"Jaime Alonso Ramos Silva",correo:"jaime.rs@cdjuarez.tecnm.mx",horario:"Lunes a Viernes15:00 a 16:00 hrs.",lugar:"Cubículo 2 - Edificion Guillot"},
{materia: "Diseño y Desarrollo de Aplicaciones Móviles ReactivaS",profesor:"Jaime Alonso Ramos Silva",correo:"jaime.rs@cdjuarez.tecnm.mx",horario:"Lunes a Viernes15:00 a 16:00 hrs.",lugar:"Cubículo 2 - Edificion Guillot"},
{materia: "Desarrollo de Aplicaciones Web Reactivas",profesor:"Jaime Alonso Ramos Silva",correo:"jaime.rs@cdjuarez.tecnm.mx",horario:"Lunes a Viernes15:00 a 16:00 hrs.",lugar:"Cubículo 2 - Edificion Guillot"},
{materia: "Fundamentos de Proggramación / Sistemas Operativos",profesor:"Gallegos Borunda Alma Patricia",correo:"alma.gb@cdjuarez.tecnm.mx",horario:"lunes de 11:00 a 12:00 pm",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Sistemas Operativos",profesor:"Gallegos Borunda Alma Patricia",correo:"alma.gb@cdjuarez.tecnm.mx",horario:"lunes de 11:00 a 12:00 pm",lugar:"Edificio de Sistemas, Cubículo 6"},
{materia: "Programación",profesor:"Anita Loya Lozoya",correo:"anita.ll@cdjuarez.tecnm.mx",horario:"Lunes a viernes 12:00 a 13:00",lugar:"Edificio de Sistemas, Cubículo 4"},
{materia: "Programación Web",profesor:"",correo:"",horario:"",lugar:""},
{materia: "Tópicos avanzados de programación",profesor:"",correo:"",horario:"",lugar:""},
{materia: "Graficación",profesor:"Noé Ramón Rosales Morales",correo:"noe@cdjuarez.tecnm.mx",horario:"Viernes 9-13",lugar:"Cubiculo Depto Sistemas y Computación"},
{materia: " Taller de Sistemas Operativos",profesor:"Noé Ramón Rosales Morales",correo:"noe@cdjuarez.tecnm.mx",horario:"Viernes 9-13",lugar:"Cubiculo Depto Sistemas y Computación"}



       
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
