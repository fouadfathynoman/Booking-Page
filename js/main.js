// Function to update the year
function updateYear() {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}
updateYear();
setInterval(updateYear, 1000);

// Handle form submission
const bookingForm = document.getElementById('bookingForm');
bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('user').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('book').value;

    // Validate inputs
    if (!username || !phone || !date || !time) {
        showMessage('يرجى ملء جميع الحقول!', 'error');
        return;
    }

    // Validate phone format
    const phoneRegex = /^\+201[0-2]\d{8}$/;
    if (!phoneRegex.test(phone)) {
        showMessage('يرجى إدخال رقم هاتف صحيح يبدأ بـ +201 ويحتوي على 11 رقمًا!', 'error');
        return;
    }

    // Create success message
    const message = `تم التسجيل!\n user name: ${username}\n phone: ${phone}\n date: ${date}\n time: ${time}`;

    // Show message
    showMessage(message, 'success');

    // Reset form
    bookingForm.reset();
});

// Function to show message
function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.style.backgroundColor = type === 'success' ? '#4CAF50' : '#f44336';
    messageDiv.style
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '10px';
    messageDiv.style.marginBottom = '10px';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.whiteSpace = 'pre-line';
    messageDiv.textContent = message;
    bookingForm.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 5000);
}