function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      updateLinkColor();
      updateLinkColor2();
  }
}

function saveTheme() {
  if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
  } else {
      localStorage.setItem('theme', 'light');
  }
}

document.getElementById("themeButton").addEventListener("click", function() {
  document.body.classList.toggle("dark-theme");
  updateLinkColor();
  updateLinkColor2();
  saveTheme();
});

function updateLinkColor() {
  if (document.body.classList.contains("dark-theme")) {
      document.documentElement.style.setProperty('--link-color-light', 'white');
      document.documentElement.style.setProperty('--hover-text-shadow-color', 'white');
      document.getElementById('nav1').style.backgroundColor = "rgba(165, 92, 3, 0.7)";
  } else {
      document.documentElement.style.setProperty('--link-color-light', 'black');
      document.documentElement.style.setProperty('--hover-text-shadow-color', 'black');
      document.getElementById('nav1').style.backgroundColor = "rgba(255, 140, 0, 0.7)";
  }
}

function updateLinkColor2() {
  var image = document.getElementById('themeButton');
  if (document.body.classList.contains("dark-theme")) {
      image.src = 'img/light.png';
  } else {
      image.src = 'img/dark.png';
  }
}

loadTheme();