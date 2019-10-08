var d, h, m, s, col,clock;
function clocky() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h < 10){
        h = '0' + h;
    }
    if(m < 10){
        m = '0' + m;
    }
    if(s < 10){
        s = '0' + s;
    }
    
    clock = h + ":" + m + ":" + s;
    col = "#" + h + m + s;
    
    document.body.style.background = col;
    document.getElementById("time").innerHTML = clock;
    
    setTimeout(clocky,1000);
}

clocky();
