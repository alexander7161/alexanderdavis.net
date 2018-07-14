var colorIndex = 0;

function DarkenBar() {
  var titles = document.getElementsByClassName('title');
  for (var i = 0; i < titles.length; i++) {
    var color;
    switch (colorIndex) {
      case 0:
        color = '#33BCE5';
        break;
      case 1:
        color = '#2B9DBF';
        break;
      case 2:
        color = '#1C687F';
        break;
      case 3:
        color = '#39D1FF';
        colorIndex = 0;
        break;
      default:
        color = "#39D1FF";
        break;
    }
    colorIndex++;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
    titles[i].style.backgroundColor = color;
  }
}