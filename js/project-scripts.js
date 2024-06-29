document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ["img/card1/image1_card1.jpg", "img/card1/image2_card1.jpg", "img/card1/image3_card1.jpg", "img/card1/image4_card1.jpg", "img/card1/image5_card1.jpg"],
        ["img/card2/image1_card2.jpg", "img/card2/image2_card2.jpg", "img/card2/image3_card2.jpg", "img/card2/image4_card2.jpg", "img/card2/image5_card2.jpg"],
        ["img/card1/image1_card1.jpg", "img/card1/image2_card1.jpg", "img/card1/image3_card1.jpg", "img/card1/image4_card1.jpg", "img/card1/image5_card1.jpg"],
        ["img/card1/image1_card1.jpg", "img/card1/image2_card1.jpg", "img/card1/image3_card1.jpg", "img/card1/image4_card1.jpg", "img/card1/image5_card1.jpg"],
        ["img/card1/image1_card1.jpg", "img/card1/image2_card1.jpg", "img/card1/image3_card1.jpg", "img/card1/image4_card1.jpg", "img/card1/image5_card1.jpg"],
        ["img/card1/image1_card1.jpg", "img/card1/image2_card1.jpg", "img/card1/image3_card1.jpg", "img/card1/image4_card1.jpg", "img/card1/image5_card1.jpg"]
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
