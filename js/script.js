const playVideoElem = document.querySelector(".play-video-img");
const videoPresentElem = document.querySelector(".video-present");
const videoContentElem = document.querySelector(".video-content");
const closeVideoElem = document.querySelector(".close-video");

playVideoElem.addEventListener('click', function(event) {
    videoPresentElem.style.display = "block";
    videoContentElem.style.display = "flex";
    closeVideoElem.style.display = "block";
});

closeVideoElem.addEventListener('click', function(event) {
    videoPresentElem.style.display = "none";
    videoContentElem.style.display = "none";
    closeVideoElem.style.display = "none";
});