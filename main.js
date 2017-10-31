var video = document.getElementById('movie');
var urlInput = document.getElementById('url');
var refreshTime = 30 * 60 * 1000;  // refresh every half hour

function setup() {
  urlInput.addEventListener('change', onInputChange);
  var stored = localStorage.getItem('peek_src');
  if (stored && stored != '') {
    urlInput.value = stored;
  }

  video.addEventListener('click', toggle);

  setTimeout(function() {
    location.reload();
  }, refreshTime);

  onInputChange();
}

function onInputChange(evt) {
  localStorage.setItem('peek_src', urlInput.value);
  video.setAttribute('src', 'http://' + urlInput.value);
}


function toggle() {
  console.log('toggle');
  if (urlInput.style.display == 'none') {
    urlInput.style.display = 'block';
  } else {
    urlInput.style.display = 'none';
  }
}

setup();
