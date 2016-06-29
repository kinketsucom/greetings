function click(e) {
  // chrome.tabs.executeScript(null,
  //     {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
    // document.write('<audio id="player" src="./audio.mp3">');
    // document.getElementById('player').play();
    document.getElementById(e.target.id+"v").play();
  // window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }

});


