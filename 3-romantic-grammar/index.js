document.getElementById("btn").addEventListener("click", correct);

// Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
// It should read "Valentine's"
// Render the corrected message to the DOM.

function correct() {
    const paragraph = document.getElementById("paragraph");
    let str = paragraph.textContent;

    const firstChar = str[0].toUpperCase();
    const remainder = str.slice(1, str.length).toLowerCase();

    str = firstChar.concat(remainder);
    paragraph.textContent = str;
}
