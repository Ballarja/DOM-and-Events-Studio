// Write your JavaScript code here.
// Remember to pay attention to page loading!


function thisFucntion(){
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");

    takeOff.addEventListener("click", event =>{
        window.confirm("Confirm that the shuttle is ready for takeoff.")
    });
    takeOff.addEventListener("click", event =>{
        flightStatus.innerHTML = "Shuttle in Flight?";
    })
    takeOff.addEventListener("click", function(event){
        event.target.styles.shuttleBackground = "blue";
    })
    
}

window.addEventListener("load", thisFucntion);