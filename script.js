const submit_btn = document.getElementById('submit_btn');

const contact_name = document.getElementById('contact_name');
const email = document.getElementById('email');
const message = document.getElementById('message');

submit_btn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate inputs
    if (contact_name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert(`お名前: ${contact_name.value}\nemail: ${email.value}\nお問合せ内容: ${message.value}`);
    
    // Clear the form
    contact_name.value = '';
    email.value = '';
    message.value = '';
});