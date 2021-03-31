const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();

    // Gather the data from the form elements on the page
    const email = document.querySelector('#email-login').value.trim(); // <== Check this selector on Plantsy app
    const password = document.querySelector('#password-login').value.trim(); // <== Check this selector on Plantsy app

    if (email && password) {
        // Send the e-mail and password to the server
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.login-form') // <== Check this selector on Plantsy app
    .addEventListener('submit', loginFormHandler);