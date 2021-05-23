$(document).ready(function(){
    loadDoc*(
})

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            posts = JSON.parse(this.response);
            arrangeDocs(posts);

        }
    };
    xhttp.open("GET", "https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts", true);
    xhttp.send();
}

function arrangeDocs(params) {
    params.forEach(post => {
        var pd = post.time;
        if (post.show == 'off') {
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<div class='card'>  <div class='card-body'><div class='card-content'><div class='mb-1 text-muted'>" + pd + "</div> <h5 class='card-title'>" + post.title + "</h5><p class='card-text'>" + post.content + "</p></div></div></div>"

        }
        else if (post.show == 'on') {
            document.getElementById("test").innerHTML = document.getElementById("test").innerHTML + "<div class='card'> <img src='https://main-pwep-ldhnayhlcqhu1y2u-gtw.qovery.io/posts/uploads/" + post.img + "' alt='Inspire' class='img-fluid'> <div class='card-body'><div class='card-content'><div class='mb-1 text-muted'>" + pd + "</div> <h5 class='card-title'>" + post.title + "</h5><p class='card-text'>" + post.content + "</p></div></div></div>"

        }
    });
}

function formsub() {
    var objf = document.getElementById('datep');
    dateObj = new Date();
    CD = dateObj.toDateString()
    objf.value = CD;
}
