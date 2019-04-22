//Set all styling to material
ons.platform.select('android');



//Settings as local variables

//Menu open Function
function togglemenu() {
  document.querySelector('#menu').open();
}
//Function to Switch Page
function switchpage(pagename) {
  var menu = document.getElementById('menu');
  var page = pagename + ".html";
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage(page).then(menu.close.bind(menu));;
}

//Responsive Voice Functions
function speakeng(k) {
    speaker = "UK English Female";
    speed = 1.00;
    responsiveVoice.speak(k, speaker, {
        rate: speed
    });
}

function speakchin(k) {
    speaker = "Chinese Female";
    speed = 1.00;
    responsiveVoice.speak(k, speaker, {
        rate: speed
    });
}
