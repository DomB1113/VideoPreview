console.log("page loaded...");
function playvid(vid) {    
    console.log(vid)
    vid.play();
}
function stopvid(vid){
    console.log(vid)
    vid.pause()
    // vid.currentTime = 0;
    // vid.playbackRate = 2.0;
}