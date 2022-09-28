let hearts = document.querySelectorAll('.heart');
let likesNumber = document.querySelector('.likes-number');
for (let heart of hearts) {
    heart.onclick = function () {
        if (heart.classList.contains('added')) {
        likesNumber.textContent--;
        }else{likesNumber.textContent++;}
        heart.classList.toggle('added');
        };
};
