pos = 0;

right.onclick = function () {

    if (pos > -400) {
        pos = pos - 100;
        gallery.style.left = pos + "%";
    }
    else if (pos == -400) {
        pos = 0;
        gallery.style.left = pos + "%";
    }


    changeTab(pos / -100);
}


left.onclick = function () {

    if (pos < 0) {
        pos = pos + 100;
        gallery.style.left = pos + "%";
    }


    changeTab(pos / -100);
}