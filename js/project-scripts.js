document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ["img/image1_card1.jpg", "img/image2_card1.jpg", "img/image3_card1.jpg", "img/image4_card1.jpg", "img/image5_card1.jpg"],
        ["img/image2.jpg", "img/image2-2.jpg", "img/image2-3.jpg"],
        ["img/image3.jpg", "img/image3-2.jpg", "img/image3-3.jpg"],
        ["img/image4.jpg", "img/image4-2.jpg", "img/image4-3.jpg"]
    ];

    const cards = document.querySelectorAll('.project-image');

    cards.forEach((card, index) => {
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % imageSets[index].length;
            card.src = imageSets[index][currentIndex];
        }, 5000);
    });
});
