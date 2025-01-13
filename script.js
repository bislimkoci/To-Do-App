const MAXIMUMTASK = 6;
let eventID = 0;

const htmlAddButton = document.getElementById("add-event");
const holder = document.getElementById("holder");
const description = document.getElementById("description");

function addEventfunc(_e) {
    const nbrOfEvent = holder.querySelectorAll(".event").length;
    if (nbrOfEvent >= 6) {
        return;
    }
    if (!description.value.trim()) {
        return;
    }

    // Create a new event div dynamically
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event';
    eventDiv.id = `event-${eventID}`;
    eventDiv.innerHTML = `
        <p id="event-description">${description.value.trim()}</p>
        <button type="button" id="button-${eventID}">
            <img src="circle-xmark.png" alt="cross">
        </button>
    `;

    // Append the new event to the holder
    holder.appendChild(eventDiv);

    // Add event listener to the new remove button
    const removeButton = eventDiv.querySelector(`#button-${eventID}`);
    removeButton.addEventListener('click', removeEvent);

    // Increment the eventID
    eventID++;

    console.log(holder.innerHTML);
}

function removeEvent(_e) {
    const button = _e.target.closest('button'); // Get the button

    // Navigate to the parent 'event' div and remove it
    const eventDiv = button.closest('.event'); // Find the parent div with class 'event'
    if (eventDiv) {
        eventDiv.remove(); // Remove the event div from the DOM
    }
    console.log(holder.innerHTML); // Log the updated holder content
    
}


htmlAddButton.addEventListener('click', addEventfunc);