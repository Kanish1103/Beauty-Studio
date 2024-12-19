// Function to validate the contact form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    // emailjs.sendForm('your_service_id', 'your_template_id', form)
    //     .then((response) => console.log(response))
    //     .catch((error) => console.error(error));

    // Clear previous error messages
    document.getElementById('firstnameError').innerText = '';
    document.getElementById('lastnameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('serviceError').innerText = '';
    document.getElementById('staffError').innerText = '';
    document.getElementById('subjectError').innerText = '';
    // document.getElementById('messageError').innerText = '';


    // Get form values
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value.trim();
    const staff = document.getElementById('staff').value.trim();
    const subject = document.getElementById('subject').value.trim();
    // const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate First Name
    if (firstname === '') {
        document.getElementById('firstnameError').innerText = 'First Name is required.';
        isValid = false;
    }

    // Validate Last Name
    if (lastname === '') {
        document.getElementById('lastnameError').innerText = 'Last Name is required.';
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/; // Example: 10-digit phone number
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'Please enter a valid phone number (10 digits).';
        isValid = false;
    }

    if (service === '') {
        document.getElementById('serviceError').innerText = 'Please Select a service.';
        isValid = false;
    }


    if (staff === '') {
        document.getElementById('staffError').innerText = 'Please Select a staff.';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').innerText = ' Write a subject.';
        isValid = false;
    }

    // if (message === '') {
    //     document.getElementById('messageError').innerText = 'Describe your message ';
    //     isValid = false;
    // }

    // If the form is valid, you can submit it or perform further actions
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form or perform any other action
        document.getElementById('contactForm').submit();
    }
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', validateForm);