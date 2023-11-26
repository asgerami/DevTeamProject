function createEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventPlace = document.getElementById('eventPlace').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventType = document.getElementById('eventType').value;
    const eventDescription = document.getElementById('eventDescription').value;

    const event = {
        eventName,
        eventPlace,
        eventDate,
        eventTime,
        eventType,
        eventDescription
    };

    console.log('Created Event:', event);

    window.location.href = 'events.html';
}
