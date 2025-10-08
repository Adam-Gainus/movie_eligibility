const form = document.getElementById('ticketForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const isStudent = document.getElementById('isStudent').checked;
    let message = '';

    if (age < 0) {
        message = 'Please enter a valid age.';
    } else if (age < 13) {
        message = 'You are eligible for a child ticket.';
    } else if (age >= 13 && age <= 17) {
        message = 'You are eligible for a teen ticket.';
    } else if (age >= 18 && age <= 64) {
        if (isStudent) {
            message = 'You are eligible for a student ticket.';
        } else {
            message = 'You are eligible for an adult ticket.';
        }
    } else {
        message = 'You are eligible for a senior ticket.';
    }

    resultDiv.textContent = message;
});