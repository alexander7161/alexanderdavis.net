window.onload = function() {
//var url = httpGet("https://api.github.com/zen");
//console.log(url);

getTimeSinceMIHC();
}

function getTimeSinceMIHC()
{
  var time;
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://api.github.com/repos/alexander7161/MyIndividualHealthCare/commits', true);

  request.onload = function () {
    // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var commits = [];
  data.forEach(commit => {
    // Log each movie's title
  commits.push(commit);
  });
  var date1 = new Date(commits[0].commit.author.date)
  var date2 = new Date();
    console.log(date1);
    console.log(date2);
    timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  var element = document.getElementById("MIHCTime");
  element.innerHTML = "Last updated " + diffDays + " days ago";
}
  // Send request
  request.send();
  return time;
}
