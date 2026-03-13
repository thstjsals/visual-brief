document.getElementById("message").textContent = "Server is working!";

function makeAbsDiv(w, h, x, y, br) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.width = w + "px";
  div.style.height = h + "px";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.borderRadius = br + "px";
  document.body.appendChild(div);
  return div;
}

function makeAbsImg(src, w, h, x, y, br) {
  const img = document.createElement("img");
  img.src = src;
  img.style.position = "absolute";
  img.style.width = w + "px";
  img.style.height = h + "px";
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.borderRadius = br + "px";
  document.body.appendChild(img);
  return img;
}

function makeAbsText(text, x, y, fontSize) {
  const el = document.createElement("span");
  el.textContent = text;
  el.style.position = "absolute";
  el.style.left = x + "px";
  el.style.top = y + "px";
  el.style.fontSize = fontSize + "px";
  document.body.appendChild(el);
  return el;
}

function makeAbsCanvas(w, h, x, y) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  canvas.style.position = "absolute";
  canvas.style.left = x + "px";
  canvas.style.top = y + "px";
  document.body.appendChild(canvas);
  return canvas;
}

function moveEl(el, x, y) {
  el.style.left = x + "px";
  el.style.top = y + "px";
}

function resizeEl(el, w, h) {
  el.style.width = w + "px";
  el.style.height = h + "px";
}

function makeFlexRow(x, y, gap) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.display = "flex";
  div.style.flexDirection = "row";
  div.style.gap = gap + "px";
  document.body.appendChild(div);
  return div;
}

function makeFlexCol(x, y, gap) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.gap = gap + "px";
  document.body.appendChild(div);
  return div;
}

function centerEl(el, axis = "both") {
  if (axis === "hor") {
    el.style.left = "50%";
    el.style.transform = "translateX(-50%)";
  } else if (axis === "ver") {
    el.style.top = "50%";
    el.style.transform = "translateY(-50%)";
  } else {
    el.style.left = "50%";
    el.style.top = "50%";
    el.style.transform = "translate(-50%, -50%)";
  }
}
