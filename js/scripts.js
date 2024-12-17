const stars = document.querySelectorAll('.rating input');
stars.forEach(star => {
    star.addEventListener('change', () => {
        alert(`您選擇了 ${star.id[5]} 星評價`);
    });
});

// $(document).ready(function () {
//     var score = '${reservationPage.commentScore}';

//     highlightStar(score)
// })

// function highlightStar(num) {
//     var starBg = document.getElementById("starContainer")
//     var stars = starBg.getElementsByTagName("a");
//     for (var i = 0; i < num; i++) {
//         stars[i].className = 'highlight';
//     }
// }