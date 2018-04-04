window.onload = function() {
getTimeSince('alexander7161/MyIndividualHealthCare', 'MIHCTime');
getTimeSince('Futuramistic/Bot', 'AlzheimerAssistant');
getTimeSince('alexander7161/Habitat-Simulator', 'Habitat');
getTimeSince('alexander7161/stratford', 'stratford');
getTimeSince('alexander7161/alexanderdavis.net', 'alexanderDavisWebsite');

}
function getTimeSince(repo, elementID)
{
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', 'http://api.github.com/repos/'+repo+'/commits', true);

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
//    console.log(date1);
//    console.log(date2);
    timeDiff = Math.abs(date2.getTime() - date1.getTime());
    if((timeDiff/1000)<150000) {
      var diff = Math.ceil(timeDiff / (1000 * 3600));
      if(diff == 1) {
        diff += " hour ago";
      } else {
        diff += " hours ago";
      }
    } else {
      var diff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if(diff == 1) {
        diff += " day ago";
      }
      else {
      diff += " days ago"
    }
    }
  var element = document.getElementById(elementID);
  element.innerHTML = "Last updated " + diff;
}
  // Send request
  request.send();
}
