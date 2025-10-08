const form = document.getElementById('ticketForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const isStudent = document.getElementById('isStudent').checked;
    let message = '';

    if (age < 0) {
        message = 'Please enter a valid age.';
    } else if (age < 17) {
        message = 'Discounted ticket granted.';
    } else if (age >= 18) {
        if (isStudent) {
            message = 'Discounted ticket granted.';
        } else {
            message = 'Regular ticket only.';
        }
    }

    resultDiv.textContent = message;
});