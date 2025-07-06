function toggleSideNav(event) {
    event.preventDefault();
    const sideNav = document.querySelector('.side-nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer')
    const bar = document.querySelector('.bar');
    sideNav.classList.toggle('hidden');
    if (sideNav.classList.contains('hidden')) {
        bar.classList.remove('fa-xmark');
        bar.classList.add('fa-bars');
        main.classList.remove('hidden');
        footer.classList.remove('hidden')
    } else {
        bar.classList.remove('fa-bars');
        bar.classList.add('fa-xmark');
        main.classList.add('hidden');
        footer.classList.add('hidden')
    }
}

function toggleFaq() {
    const faqCards = document.querySelectorAll('.faq-card');
    faqCards.forEach((card) => {
        card.addEventListener('click', () => {
            const hiddenContent = card.querySelector('.faq-h-content');
            if (hiddenContent) {
                hiddenContent.classList.toggle('hidden');
            }
        });
    });
};

toggleFaq()