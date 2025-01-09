

const htmlAddButton = document.getElementById("add-event");
const holder = document.getElementById("holder");



function addEventfunc(_e) {
    StringEvent = `
        <div class="event">
            <p id="event-description">lorem</p>
            <button type="button"><img src="circle-xmark.png" alt="cross"></button>
        </div>
    `;
    holder.innerHTML += StringEvent;
}


htmlAddButton.addEventListener('click', addEventfunc);