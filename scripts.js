function addEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const eventPlace = document.getElementById('eventPlace').value;
  
    if (eventName && eventDate && eventTime && eventPlace) {
      const calendar = document.querySelector('.calendar');
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event';
      eventDiv.innerHTML = `<strong>${eventName}</strong><br>Date: ${eventDate}<br>Time: ${eventTime}<br>Place: ${eventPlace}`;
      calendar.appendChild(eventDiv);
  
      // Clear the form
      document.getElementById('eventName').value = '';
      document.getElementById('eventDate').value = '';
      document.getElementById('eventTime').value = '';
      document.getElementById('eventPlace').value = '';
    } else {
      alert('Please fill in all fields');
    }
  }
  