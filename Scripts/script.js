const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(100,40,100,50);
    ctx.fillstyle = "#FF0000";
    ctx.fill();
    ctx.closePath();