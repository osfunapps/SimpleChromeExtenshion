// Listen for messages
/*chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    alert("title: ");
    if (msg.text === 'report_back') {
        alert("title: 2");
        // Call the specified callback, passing
        // the web-page's DOM content as argument
    }
});
*/

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {


    //get all of the elements
    var title = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerHTML;

    var pauseOrPlayBtn = document.getElementsByClassName("ytp-play-button ytp-button ytp-play-button-playlist")[0];
    if(pauseOrPlayBtn === undefined)
        pauseOrPlayBtn = document.getElementsByClassName("ytp-play-button ytp-button")[0];
    var pauseOrPlayBtnType = pauseOrPlayBtn.getAttribute("aria-label");
    var backBtn = document.getElementsByClassName("ytp-prev-button ytp-button")[0];
    var nextBtn = document.getElementsByClassName("ytp-next-button ytp-button")[0];
    var volume = document.getElementsByClassName("video-stream html5-main-video")[0];

    console.log("title: "+title);
    console.log("pauseOrPlayBtn: "+pauseOrPlayBtn);
    console.log("pauseOrPlayBtnType: "+pauseOrPlayBtnType);
    console.log("backbtn : "+backBtn);
    console.log("nextbtn : "+nextBtn);
    console.log("volume : "+volume);

    sendRequest();
    //change volume method
    //volume.volume = .8;

    //click on a button
    //nextBtn.click()

    //report back to background script
    sendResponse("this is the msg of the response back");

});

function sendRequest() {


}

