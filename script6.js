function deleteEventConfirmation() {
    document.getElementById('confirmationDialog').style.display = 'block';
}

function deleteEvent() {
    alert('Event deleted successfully!');
    closeConfirmationDialog();
}

function closeConfirmationDialog() {
    document.getElementById('confirmationDialog').style.display = 'none';
}

function editEvent() {
    alert('Edit event functionality to be implemented.');
}
