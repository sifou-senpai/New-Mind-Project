$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");

});

/***************************************************************************************/
document.getElementById("searchButton").addEventListener("click", function () {
    var searchModal = new bootstrap.Modal(document.getElementById('search'));
    searchModal.show();
});

/***************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {

    const closeButton = document.getElementById('closeButton');
    const searchButton = document.getElementById('searchButton');

    const modal = new bootstrap.Modal(document.getElementById('search'));

    closeButton.addEventListener('click', function () {
        modal.hide();
    });
});

/***************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.service-item');
    const prevButton = document.querySelector('.service-prev');
    const nextButton = document.querySelector('.service-next');
    let currentIndex = 1; // Start with the second card as active

    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            card.style.transform = `rotate(${(index - currentIndex) * 10}deg)`;
            card.style.zIndex = index === currentIndex ? '10' : '1';
        });
        cards[currentIndex].classList.add('active');
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    });

    // Initialize
    updateCards();
});

/****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.service-item');
    const prevButton = document.querySelector('.service-prev');
    const nextButton = document.querySelector('.service-next');
    let currentIndex = 1;

    function updateCards() {
        cards.forEach((card, index) => {
            card.classList.remove('active');
            card.style.transform = `rotate(${(index - currentIndex) * 10}deg)`;
            card.style.opacity = index === currentIndex ? '1' : '0.6';
            card.style.zIndex = index === currentIndex ? '10' : '1';
        });
        cards[currentIndex].classList.add('active');
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCards();
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCards();
    });

    nextButton.addEventListener('click', function () {
        nextCard();
    });

    // Initialize
    updateCards();

    // Auto-rotate every 7 seconds
    setInterval(nextCard, 5000);
});

/****************************************************************************************/
document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    const serviceSection = document.querySelector('.service_section');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            serviceSection.style.backgroundColor = 'var(--cold-red)';
        });

        item.addEventListener('mouseleave', function () {
            serviceSection.style.backgroundColor = 'var(--blue)';
        });
    });
});


