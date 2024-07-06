

function format(unit){
    if(unit < 10){
        return "0" + unit;
    }
    return unit;
    
}
function main()
{
    
    console.clear();
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    
    setInterval(() => {
  console.log("tick");
  seconds += 1;
  
  if (seconds == 60) {
    seconds = 0;
    minutes += 1;
}

if (minutes == 60) {
    minutes = 0;
    hours += 1;
}

if (hours == 24) {
    hours = 0;
}

console.log(format(hours) + ":" + format(minutes) + ":" + format(seconds));
}, 1000);

}
main();