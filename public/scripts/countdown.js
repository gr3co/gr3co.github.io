var timerId = null;

function close() {
  var modal = document.getElementById("countdown");
  modal.parentNode.removeChild(modal);
  if (timerId) {
    clearInterval(timerId);
    console.log("Stopped countdown timer");
  }
}

function updateTime() {
  var difference = new Date("Dec 20, 2015 12:00") - new Date();
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var days = Math.floor(difference / day);
  var hours = Math.floor((difference % day) / hour);
  var minutes = Math.floor((difference % hour) / minute);
  var seconds = Math.floor((difference % minute) / second);
  document.getElementById('cd').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

// Open up & set up the countdown modal!
(function(){

  var modal = "<div id='countdown'>\
      <div>\
        <img src='http://www.clipartbest.com/cliparts/di6/eb5/di6eb5yeT.png' width=100>\
        <a href='javascript:close()'' title='Close' class='close'>X</a>\
        <h2>LEAVING CMU IN</h2>\
        <h1 id='cd'></h1>\
      </div>\
    </div>"

  document.body.innerHTML += modal;
  updateTime();
  timerId = setInterval(updateTime, 1000);

})();
