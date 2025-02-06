
function genereraEmail() {
    var fornamn = document.getElementById('fornamn').value;
    var efternamn = document.getElementById('efternamn').value;
    var email = fornamn + '.' + efternamn + '@mail.com';
    document.getElementById('email').innerText = email;
}


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

random_bg_color();