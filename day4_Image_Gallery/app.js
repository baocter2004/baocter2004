var img = document.querySelectorAll(".image img");
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector(".gallery_inner img");
var gallery = document.querySelector(".gallery");
var currentIndex = 0;

function galleryShow() {
    if(currentIndex == 0){
        prev.classList.add("hide");
    }else{
        prev.classList.remove("hide");
    }
    if(currentIndex == img.length-1){
        next.classList.add("hide");
    }else{
        next.classList.remove("hide");
    }
    //display
    galleryImg.src = img[currentIndex].src;
    gallery.classList.add('show');
}

img.forEach((item, index) => {
    item.addEventListener('click', function () {
        currentIndex = index;
        galleryShow();
    });
});

function Close() {
    gallery.classList.remove('show');
}

prev.addEventListener('click',function(){
    if(currentIndex > 0){
        currentIndex--;
        galleryShow();
    }
})

next.addEventListener('click',function(){
    if(currentIndex < img.length-1){
        currentIndex++;
        galleryShow();
    }
})

