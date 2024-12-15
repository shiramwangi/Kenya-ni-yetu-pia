document.getElementById('donate-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get the values from the donation form
    let amount = document.getElementById('amount').value;
    let paymentMethod = document.getElementById('payment-method').value;

    // Store the values in localStorage or sessionStorage to pass them to the confirmation page
    localStorage.setItem('donationAmount', amount);
    localStorage.setItem('paymentMethod', paymentMethod);

    // Redirect to donation confirmation page
    window.location.href = 'donation-confirmation.html';
});
