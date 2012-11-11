// Calulation instructions
// Divide assigned 8-digit serial by 7
// Multiply remainder (first digit after period unrounded) by 7
// Round up to next whole number
// Add digit to end of serial

function compute() {
  'use strict';
  var serial = document.getElementById('serial');
  var serialMod;
  var modSeven;
  if (serial.value.length == 8) {
    serialMod = serial.value%7;
      modSeven = serial.value + serialMod;
  } else {
    serial.value = 'Sorry, I need a serial with 8 digits';
  }
  document.getElementById('check-digit').value = modSeven;
  return false;
}
function init() {
  'use strict';
  document.getElementById('customs-mod7').onsubmit = compute;
}
window.onload = init;