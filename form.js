document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const errorMessages = document.getElementById('errorMessages');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      errorMessages.innerHTML = '';
      validateForm();
    });
  
    function validateForm() {
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (fullName.length < 5) {
        showError('Full Name must be at least 5 characters long.');
        return;
      }
  
      if (!email.includes('@')) {
        showError('Enter a valid email address.');
        return;
      }
  
      if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        showError('Enter a valid 10-digit phone number.');
        return;
      }
  
      if (password.length < 8 || password === 'password' || password === fullName) {
        showError('Password must be at least 8 characters long and should not be "password" or your name.');
        return;
      }
  
      if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
      }
  
      // If all validations pass, submit the form
      form.submit();
    }
  
    function showError(message) {
      const error = document.createElement('div');
      error.textContent = message;
      errorMessages.appendChild(error);
    }
  });
  