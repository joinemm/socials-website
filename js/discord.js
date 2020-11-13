var apibase = "https://api.joinemm.dev"

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

function getDiscordData() {
    fetch(apibase + "/discord/user")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            // Work with JSON data here
            document.getElementById('AvatarImage').src = "https://cdn.discordapp.com/avatars/" + data['id'] + "/" + data['avatar'];
            document.getElementById('user').innerHTML = data['username'];
            document.getElementById('disc').innerHTML = "#" + data['discriminator'];
        })
        .catch((err) => {
            console.log(err)
        })
}

function guildData() {
    fetch(apibase + "/discord/user/guilds")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (var i = 0; i < data.length; i++) {
                // Work with JSON data here
                guild = document.getElementById('guild-' + data[i]['id'])
                guild.getElementsByClassName("guild-icon")[0].src = "https://cdn.discordapp.com/icons/" + data[i]['id'] + "/" + data[i]['icon'];
                guild.getElementsByClassName("servername")[0].innerHTML = data[i]['name'];
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

getDiscordData();
guildData();