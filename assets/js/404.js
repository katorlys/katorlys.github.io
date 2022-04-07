var url = "https://icanhazdadjoke.com/";
var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.setRequestHeader("Accept", "text/plain");
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        document.getElementById("joke").innerHTML = xhr.responseText;
    }
};
xhr.send();