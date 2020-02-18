"use strict";

function convert(){
  const text = document.getElementById('text').value;
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  context.font = 'italic 20pt Calibri';
  context.textAlign = 'center';
  context.fillStyle = 'blue'; // color string, hex value, or RGB value.
  context.fillText(text, 250, 250); // text and position
}