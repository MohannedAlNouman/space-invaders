export const drawShip = (ctx, fc, pX, pY) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.moveTo(pX, pY);
  ctx.lineTo(pX - 25, pY + 25);
  ctx.lineTo(pX + 25, pY + 25);
  ctx.fill();
};
