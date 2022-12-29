var themeicon = document.getElementById("themeicon");
themeicon.onclick = function () {
    document.body.classList.toggle("lighttheme");
    if (document.body.classList.contains("lighttheme")) {
        themeicon.src = "/images/moon.png";
    }
    else {
        themeicon.src = "/images/sun.png";
    }
}
