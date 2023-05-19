let switchMode = document.getElementById("switchMode");

switchMode.onclick = function () {
    let theem = document.getElementById("theem");

    if (theem.getAttribute("href") == "assets/css/style.min.css"){
        theem.href = "assets/css/style_darc.min.css";
    } else {
        theem.href = "assets/css/style.min.css"
    }
}

