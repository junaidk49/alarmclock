var timer = null;
var audio = new Audio('alarm.mp3');

function startTimer() {
  var timeInput = document.getElementById('time-input');
  var timerDisplay = document.getElementById('timer-display');

  var time = timeInput.value.split(':');
  var hours = parseInt(time[0]);
  var minutes = parseInt(time[1]);
  var seconds = parseInt(time[2]);

  var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

  timer = setInterval(function() {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      audio.play();
      alert('Timer Expired!');
    } else {
      var hoursRemaining = Math.floor(totalSeconds / 3600);
      var minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
      var secondsRemaining = totalSeconds % 60;

      var timerString = ('0' + hoursRemaining).slice(-2) + ':' + ('0' + minutesRemaining).slice(-2) + ':' + ('0' + secondsRemaining).slice(-2);

      timerDisplay.innerHTML = timerString;
      totalSeconds--;
    }
  }, 1000);
}

var startButton = document.getElementById('start-button');
startButton.addEventListener('click', function() {
  if (timer !== null) {
    clearInterval(timer);
  }
  startTimer();
});
