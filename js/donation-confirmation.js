document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the donation data from localStorage
    const donationAmount = localStorage.getItem('donationAmount') || "KSh 0.00";
    const paymentMethod = localStorage.getItem('paymentMethod') || "N/A";
    const donationDate = new Date().toLocaleDateString();

    // Update donation details on the page
    document.getElementById('donation-amount').textContent = donationAmount;
    document.getElementById('payment-method').textContent = paymentMethod;
    document.getElementById('donation-date').textContent = donationDate;
});
