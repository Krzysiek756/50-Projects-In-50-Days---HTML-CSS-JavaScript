"use strict";

var toggle = document.getElementById('toggle');
var nav = document.getElementById('nav');
toggle.addEventListener('click', function () {
  nav.classList.toggle('active');
});