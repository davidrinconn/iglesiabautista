document.addEventListener('DOMContentLoaded', function () {
    // Calendario 1
    var calendarEl1 = document.getElementById('calendar1');
    var calendar1 = new FullCalendar.Calendar(calendarEl1, {
        initialView: 'dayGridMonth',
        locale: 'es'
    });
    calendar1.render();

    // Calendario 2
    var calendarEl2 = document.getElementById('calendar2');
    var calendar2 = new FullCalendar.Calendar(calendarEl2, {
        initialView: 'dayGridMonth',
        locale: 'es'
    });
    calendar2.render();

    // Calendario 3
    var calendarEl3 = document.getElementById('calendar3');
    var calendar3 = new FullCalendar.Calendar(calendarEl3, {
        initialView: 'dayGridMonth',
        locale: 'es'
    });
    calendar3.render();
});

function abrirCalendario(id) {
    // Oculta todos los calendarios
    document.querySelectorAll('.calendario').forEach(function (cal) {
        cal.classList.add('d-none');
    });
    // Muestra el calendario correspondiente
    document.getElementById(id).classList.remove('d-none');
}
