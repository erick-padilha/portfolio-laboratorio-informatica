// js/project-scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const imageSets = [
        ['img/card1/img1.jpg', 'img/card1/img2.jpg', 'img/card1/img3.jpg', 'img/card1/img4.jpg', 'img/card1/img5.jpg'],
        ['img/card2/img1.jpg', 'img/card2/img2.jpg', 'img/card2/img3.jpg', 'img/card2/img4.jpg', 'img/card2/img5.jpg'],
        ['img/card3/img1.jpg', 'img/card3/img2.jpg', 'img/card3/img3.jpg', 'img/card3/img4.jpg', 'img/card3/img5.jpg'],
        ['img/card4/img1.jpg', 'img/card4/img2.jpg', 'img/card4/img3.jpg', 'img/card4/img4.jpg', 'img/card4/img5.jpg'],
        ['img/card5/img1.jpg', 'img/card5/img2.jpg', 'img/card5/img3.jpg', 'img/card5/img4.jpg', 'img/card5/img5.jpg'],
        ['img/card6/img1.jpg', 'img/card6/img2.jpg', 'img/card6/img3.jpg', 'img/card6/img4.jpg', 'img/card6/img5.jpg'],
        ['img/card7/img1.jpg', 'img/card7/img2.jpg', 'img/card7/img3.jpg', 'img/card7/img4.jpg', 'img/card7/img5.jpg'],
        ['img/card8/img1.jpg', 'img/card8/img2.jpg', 'img/card8/img3.jpg', 'img/card8/img4.jpg', 'img/card8/img5.jpg'],
        ['img/card9/img1.jpg', 'img/card9/img2.jpg', 'img/card9/img3.jpg', 'img/card9/img4.jpg', 'img/card9/img5.jpg'],
        ['img/card10/img1.jpg', 'img/card10/img2.jpg', 'img/card10/img3.jpg'],
        ['img/card11/img1.jpg', 'img/card11/img2.jpg', 'img/card11/img3.jpg'],
        ['img/card12/gifmaquete.gif'],
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
