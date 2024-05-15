document.getElementById('fetchHolidayBtn').addEventListener('click', fetchNextHoliday);

function fetchNextHoliday() {
    const apiUrl = 'https://api.boostr.cl/feriados/en.json';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const currentDate = new Date();
            const holidays = data.data.filter(holiday => new Date(convertDateFormat(holiday.date)) > currentDate);
            if (holidays.length > 0) {
                const nextHoliday = holidays[0];
                const holidayDate = new Date(convertDateFormat(nextHoliday.date));
                const formattedDate = holidayDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                document.getElementById('holiday').innerHTML = `<p><strong>${nextHoliday.title}</strong>, el ${formattedDate}</p>`;
            } else {
                document.getElementById('holiday').innerHTML = '<p>No hay próximos feriados.</p>';
            }
        })
        .catch(error => {
            console.error('Error al obtener el próximo feriado:', error);
            document.getElementById('holiday').innerHTML = '<p>No se pudo obtener el próximo feriado.</p>';
        });
}

function convertDateFormat(dateString) {
    // Suponiendo que dateString está en el formato 'YYYY-MM-DD'
    const parts = dateString.split('-');
    return `${parts[1]}/${parts[2]}/${parts[0]}`; // Formato 'MM/DD/YYYY'
}
