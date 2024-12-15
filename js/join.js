// Handle form submission and show the thank you message
document.getElementById('join-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Hide the form
    document.querySelector('.form-section').style.display = 'none';

    // Show the thank you section
    document.querySelector('.thank-you-section').style.display = 'block';

    // Optionally, clear the form fields
    document.getElementById('join-form').reset();
});
