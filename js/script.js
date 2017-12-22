var active = false;

function draw(e) {
    if (active == false) return;

    var x = e.clientX;
    var y = e.clientY;
    var div = document.createElement("div");
    div.style.top = y + "px";
    div.style.left = x + "px";
    document.body.appendChild(div);
};

function drawActive() {
    active = !active
};

document.addEventListener("mousemove", draw);
document.addEventListener("mousedown", drawActive);
document.addEventListener("mouseup", drawActive);
