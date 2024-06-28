document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ["img/image1_card1.jpg", "img/image2_card1.jpg", "img/image3_card1.jpg", "img/image4_card1.jpg", "img/image5_card1.jpg"],
        ["img/image1_card1.jpg", "img/image2_card1.jpg", "img/image3_card1.jpg", "img/image4_card1.jpg", "img/image5_card1.jpg"],
        ["img/image1_card1.jpg", "img/image2_card1.jpg", "img/image3_card1.jpg", "img/image4_card1.jpg", "img/image5_card1.jpg"],
        ["img/image1_card1.jpg", "img/image2_card1.jpg", "img/image3_card1.jpg", "img/image4_card1.jpg", "img/image5_card1.jpg"],
        ["img/image1_card1.jpg", "img/image2_card1.jpg", "img/image3_card1.jpg", "img/image4_card1.jpg", "img/image5_card1.jpg"]
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
