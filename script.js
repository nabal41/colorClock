// if (ha ez igaz) {
   // hajtsd vegre ezt;
// }



function colorClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log(hours + ':' + minutes + ':' + seconds);
    
    
    // ha
    // a 'seconds' változó kisebb, mint 10
    // legyen előtte a szöveggé konvertáláskor egy nulla
    
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    
    
    
        var clockFace = hours + ':' + minutes + ':' + seconds;
        var hexColor = '#' + hours + minutes + seconds;
    
      
      setTimeout(function() {
      colorClock();
    }, 1000);
      
      
      document.getElementById('clock').innerHTML = clockFace;
      document.body.style.background = hexColor;
      document.body.style.color = '#ffffff'
    }
    
    colorClock();