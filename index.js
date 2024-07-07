

function format(unit){
    if(unit < 10){
        return "0" + unit;
    }
    return unit;
    
}

// Function to format the time units
function format(unit) {
    return unit < 10 ? "0" + unit : unit;
}

// Function to start the clock and update the time every second
function startClock() {
    const hrs = document.getElementById("hrs");
    const mins = document.getElementById("mins");
    const secs = document.getElementById("secs");
    const ampm = document.getElementById("am/pm");
    setInterval(()=>{
      const time = new Date();
      if ( format(time.getHours()) > 12){
        hrs.innerHTML = format(time.getHours() - 12);
        ampm.innerHTML = "PM";
      }
      else{
        hrs.innerHTML = format(time.getHours());
        ampm.innerHTML = "AM";
      }
      mins.innerHTML = format(time.getMinutes());
      secs.innerHTML = format(time.getSeconds());

    },1000);


}
    

  // Function to handle navigation link clicks
  function handleNavLinks() {
    document.querySelectorAll(".nav-link").forEach((navLink) => {
      navLink.addEventListener("click", () => {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("select");
        });
        navLink.classList.add("select");
      });
    });
  }

function main(){
    startClock();
    handleNavLinks();
}
main();