function validateForm(event) {
    event.preventDefault();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('subjectError').innerText = '';
    document.getElementById('messageError').innerText = '';


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    isValid = true;

    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        isValid = false;
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Enter a valid email';
        isValid = false;
    }

    if (subject === '') {
        document.getElementById('subjectError').innerText = 'Write a subject';
        isValid = false;
    }

    if (message === '') {
        document.getElementById('messageError').innerText = 'write a message';
        isValid = false;
    }
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form or perform any other action
        document.getElementById('form').submit();
    }
}

document.getElementById('form').addEventListener('submit', validateForm);