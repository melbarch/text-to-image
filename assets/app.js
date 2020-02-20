"use strict";

function convert() {
  const text = document.getElementById('text').value;
  if (!text) return;
  const lines = text.split('\n');
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');

  context.fillStyle = '#cbd5e0';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.font = 'italic 20pt Calibri';
  context.textBaseline = 'middle';
  context.fillStyle = 'black';
  for (var index = 0; index < lines.length; index++) {
    context.fillText(lines[index], 10, 20+(index*30));
  }
}
