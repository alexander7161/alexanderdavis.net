window.onload = function() {
//var url = httpGet("https://api.github.com/zen");
//console.log(url);


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send();
    return xmlHttp.responseText;
}
