function addEvent() {
    alert('Add Event functionality placeholder');
}

function editEvent() {
    alert('Edit Event functionality placeholder');
}

function deleteEvent() {
    alert('Delete Event functionality placeholder');
}

$(document).ready(function () {
    $('#calendar').fullCalendar({
       
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        defaultView: 'month',
        events: [
        ]
    });
});
