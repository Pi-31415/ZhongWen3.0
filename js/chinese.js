//This is a Javascript file which contains all the writing functions for Chinese Language

//Chinese Speech
function speakchin(k) {
    speaker = "Chinese Female";
    speed = 1.00;
    responsiveVoice.speak(k, speaker, {
        rate: speed
    });
}
