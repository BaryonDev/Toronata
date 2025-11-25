console.log('Toronata app initialized');

function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('i');

    // Toggle content visibility
    content.classList.toggle('hidden');

    // Rotate icon
    icon.classList.toggle('rotate-180');
}
