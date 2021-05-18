//Get Past Start Page
function getGameDisplay() {
    let screen = document.querySelector(".load-screen");
    let disappear = document.querySelector(".disappear");
    disappear.classList.remove("disappear");
    screen.classList.add("disappear");

}
window.addEventListener("click", getGameDisplay);
window.addEventListener("keydown", getGameDisplay);

function bam() {
    console.log('bam')
}