 // Function to update the day of the week and current time
 function updateDateTime() {
    const currentDate = new Date();
    const currentDayOfWeek = currentDate.getUTCDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[currentDayOfWeek];

    // Get the current time in HH:MM:SS format
    const hours = String(currentDate.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

    // Determine AM or PM
    const amOrPm = currentDate.getUTCHours() < 12 ? 'AM' : 'PM';
    const currentTime = hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;

    // Update the content of HTML elements
    document.getElementById('dayOfWeek').textContent = '' + currentDayName;
    document.getElementById('currentTime').textContent = '' + currentTime;
}

// Call the updateDateTime function to display the initial values
updateDateTime();

// Set an interval to update the values every second (1000 milliseconds)
setInterval(updateDateTime, 1000);