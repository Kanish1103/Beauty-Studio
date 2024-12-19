function showSidebar() {
    document.getElementById('sidebar').style.display = 'block';
}

function hideSidebar() {
    document.getElementById('sidebar').style.display = 'none';
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('header');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.color = 'black';

    } else {
        navbar.classList.remove('scrolled')
    }
});

// Function to hide the loading screen and show the main content

window.onload = function () {
    setTimeout(hideLoadingScreen, 500);
};

function hideLoadingScreen() {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContainer = document.querySelector('.main-container');

    loadingScreen.style.display = 'none';

    mainContainer.style.display = 'block';
}

