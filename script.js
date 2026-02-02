function showMessage() {
    alert("Welcome! Let’s start building your career 🚀");
}

function personalize() {
    const name = document.getElementById("nameInput").value;
    const message = document.getElementById("message");

    if (!name) {
        message.textContent = "Please enter your name.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Welcome, " + name + "! Your journey starts now.";
    message.style.color = "#22c55e";
}
