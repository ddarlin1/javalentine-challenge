const greetingDisplay = document.getElementById("greeting-display");
document.getElementById("form").addEventListener("input", writeGreeting);

// Write a function update the message in the greeting-display paragraph each time the form is updated.
function writeGreeting() {
    const recipient = document.getElementById("recipient-input").value;
    const greeting = document.getElementById("greeting-select").value;
    const sender = document.getElementById("sender-input").value;
    greetingDisplay.textContent = `
        To ${recipient},
        ${greeting}
        From ${sender}`;
}
