

car1.start();


var showPrevBtn = document.getElementById('show-prev-btn');
var showNextBtn = document.getElementById('show-next-btn');
var slideImage = document.getElementById('slide-img');


showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

var imagesUrls = [];
imagesUrls.push('https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI=');
imagesUrls.push('https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=');
imagesUrls.push('https://ichef.bbci.co.uk/news/999/cpsprodpb/6D5A/production/_119449972_10.jpg');
imagesUrls.push('https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e');

var currentImageIndex = 0;
slideImage.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;

function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}
function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;
    
    if (currentImageIndex === (imagesUrls.length - 1)) {
        showNextBtn.disabled = true;
    }
   
}