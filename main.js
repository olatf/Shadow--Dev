

function myFunction() {
    const x = document.getElementById("myLinks");
    const y = document.getElementById("body");
    const z = document.getElementById("class");
    
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.filter = "blur(0px)";
      z.style.overflow = "auto";
    } else {
      x.style.display = "block";
      y.style.filter = "blur(2px)";
      z.style.overflow = "hidden";
      x.style.filter = "blur(0px)";
    }

  }

// var modal = document.getElementById("open");
// var c = document.getElementById('myLinks');
//   modal_opener.addEventListener('click', function(){
//     c.style.filter = "blur(5px)";
//   })
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       c.style.filter = "blur(0px)";
//       modal.style.display = "block";
//     }
//   };


function myFunction2() {
    const x = document.getElementById("myLinked");
    const y = document.getElementById("body");
    const z = document.getElementById("class");
    
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.filter = "blur(0px)";
      z.style.overflow = "auto";
    } else {
      x.style.display = "block";
      y.style.filter = "blur(2px)";
      x.style.filter = "blur(0px)";
    }

  }

  function toggleDarkMode() {
    var html = document.documentElement;
    html.classList.toggle("dark");
    console.log("Am clicked")
  }
  

  function updateClock() {
    var now = new Date();
  
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // var time = hours + ":" + minutes + ":" + seconds;
  
    var clockElement = document.getElementById("clock");
    var clockElements = document.getElementById("clocks");
    var clockElemented = document.getElementById("clocked");
    clockElement.textContent = hours.toString().padStart(2, "0");
    clockElements.textContent = minutes.toString().padStart(2, "0");
    clockElemented.textContent = seconds;
  
    var dateElement = document.getElementById("date");
    dateElement.textContent = now.toDateString();
  }
  
  setInterval(updateClock, 1000); // Call updateClock every second (1000ms)
  
