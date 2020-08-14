function copyToClipboard() {
    var text = document.getElementById("user").textContent + document.getElementById("disc").textContent;
    console.log(text);
    if (navigator.clipboard != undefined) { // Navigator method
        navigator.clipboard.writeText(text);
    } else if (window.clipboardData) { // Internet Explorer
        window.clipboardData.setData("Text", text);
    } else { // Fallback
        var input = document.createElement('input');
        input.setAttribute('value', text);
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
}

function getDiscordData(userid) {
    fetch("http://45.32.187.239:8080/userinfo?userid=" + userid)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            document.getElementById('AvatarImage').src = data['avatar'];
            document.getElementById('user').innerHTML = data['name'];
            document.getElementById('disc').innerHTML = "#" + data['discriminator'];
        })
        .catch((err) => {
            console.log(err)
        })
}

function guildData(guildid) {
    fetch("http://45.32.187.239:8080/guildinfo?guildid=" + guildid)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            guild = document.getElementById('guild-' + guildid)
            guild.getElementsByClassName("guild-icon")[0].src = data['icon'];
            guild.getElementsByClassName("servername")[0].innerHTML = data['name'];
        })
        .catch((err) => {
            console.log(err)
        })
}

getDiscordData("133311691852218378");
guildData("652904322706833409");