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