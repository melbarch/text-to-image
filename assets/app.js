"use strict";

function convert(){
  const text = document.getElementById('text').value;
  if(!text) return;
  const lines = text.split('\n');
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');

  context.fillStyle = "#cbd5e0";
  context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.font = 'italic 20pt Calibri';
  context.textBaseline = "middle";
  context.fillStyle = 'black';
  context.fillText(lines[0], 10, 20);
  context.fillText(lines[1], 10, 50);
}