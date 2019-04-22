//This is a Javascript file which contains all the writing functions for Chinese Language

//Chinese Speech
function speakchin(k) {
  speaker = "Chinese Female";
  speed = 1.00;
  responsiveVoice.speak(k, speaker, {
    rate: speed
  });
}
//This is a callback function from animatestep
function hanzidisplaysteps(item,index) {
  var size = 100;
  demoP = document.getElementById("hanzisteps");
    url = "https://dictionary.writtenchinese.com/giffile.action?&localfile=true&fileName=" + item + ".gif";
    fullurl = "<img src=\"" + url + "\" height=\""+size+"px\">"
    demoP.innerHTML += fullurl;
}

//Hanzi animated display
//The output is linked to a div with id called 'anihanzi'
function animatestep(word) {
  var hanzi = word;
  var hanzisplit1 = hanzi.replace(/ /g, '');
  var hanzisplit = hanzisplit1.split("");
  hanzisplit.forEach(hanzidisplaysteps);
}
