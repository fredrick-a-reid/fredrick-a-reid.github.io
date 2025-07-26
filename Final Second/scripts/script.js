/*

Student Name: Fredrick Reid
File Name: script.js
Date: 07/22/2025

*/



// Animate .content-subtitle sliding in from the right on page load
window.addEventListener('DOMContentLoaded', function() {
  var subtitle = document.querySelector('.hero-subtitle');
  if (subtitle) {
    setTimeout(function() {
      subtitle.classList.add('animate-in');
    }, 100);
  }
});


// Animate hero-content sliding in from the left on page load
window.addEventListener('DOMContentLoaded', function() {
  var heroContents = document.querySelectorAll('.hero-content');
  heroContents.forEach(function(el, i) {
    setTimeout(function() {
      el.classList.add('animate-in');
    }, 100 + i * 100); // staggered delay for effect
  });
});

// Animate div.content with gentle slide-in on page load
window.addEventListener('DOMContentLoaded', function() {
  var contentBlocks = document.querySelectorAll('div.content');
  contentBlocks.forEach(function(el, i) {
    el.classList.add('content-fade-in');
    setTimeout(function() {
      el.classList.add('animate-in');
    }, 300 + i * 100); // gentle staggered delay
  });
});

document.querySelector('.hero').addEventListener('click', function() {
  var audio = document.getElementById('train-audio');
  if (audio) {
    audio.currentTime = 0; // Restart audio if already playing
    audio.play();
  }
});

// Hamburger menu toggle function
function hamburger() {
    var menu = document.getElementById("nav-toggle");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    } 
}
