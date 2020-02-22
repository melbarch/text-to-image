"use strict";

function convert() {
  console.log("converting");
  const text = document.getElementById("text").value;
  if (!text) return;
  const lines = text.split("\n");
  const canvas = document.getElementById("myCanvas");
  const context = canvas.getContext("2d");
  const width = Math.max(...lines.map(line => context.measureText(line).width));
  console.log(width)
  canvas.width = width + 20;
  canvas.height = lines.length * 30 + 10;

  context.fillStyle = "#cbd5e0";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.font = "italic 20pt Calibri";
  context.textBaseline = "middle";
  context.fillStyle = "black";
  for (var index = 0; index < lines.length; index++) {
    context.fillText(lines[index], 10, 20 + index * 30);
  }
}
