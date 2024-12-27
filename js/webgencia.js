// Scroll hero buttons
document.querySelectorAll('.buttons-hero-webgencia a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form contact
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch('../php/form.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            var responseMessage = document.getElementById('responseMessage');
            responseMessage.innerHTML = '<div class="alert ' + (data.status === 'success' ? 'alert-success' : 'alert-danger') + '" role="alert">' + data.message + '</div>';

            if (data.status === 'success') {
                document.getElementById('contactForm').reset();
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});

// Filters
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            // Remove "active" class from all buttons and add it to the clicked button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show/hide projects based on the filter
            projects.forEach(project => {
                if (filter === 'all' || project.classList.contains(filter)) {
                    project.classList.add('active');
                } else {
                    project.classList.remove('active');
                }
            });
        });
    });
});

