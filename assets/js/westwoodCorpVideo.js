
/*
    enables the onclick play/pause of the video
*/
document.querySelector("#westwoodCorpVideo").addEventListener("mouseover", function(){
    this.play()
})
document.querySelector("#westwoodCorpVideo").addEventListener("mouseleave", function(){
    this.pause()
})