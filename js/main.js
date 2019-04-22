//Set all styling to material
ons.platform.select('android');

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
