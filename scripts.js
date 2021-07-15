// Write your JavaScript code here.
// Remember to pay attention to page loading!

// 1. Use the window load event to ensure all elements have loaded before attaching event handlers.
function init () {
    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    // 2. When the "Take off" button is clicked, the following should happen:
    // a. A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." 
    //    If the shuttle is ready for liftoff, then add parts b-d.
    // b. The flight status should change to "Shuttle in flight."
    // c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
    function takeOffClicked() {
        answer = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if(answer) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.background = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000"
        }
    }
    takeOff.addEventListener("click", takeOffClicked);

    // 3. When the "Land" button is clicked, the following should happen:
    // a. A window alert should let the user know "The shuttle is landing. Landing gear engaged."
    //The flight status should change to "The shuttle has landed."
    //The background color of the shuttle flight screen should change from blue to green.
    //The shuttle height should go down to 0.
    function landingClicked() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0"
    }
    landing.addEventListener("click", landingClicked);

    // 4. When the "Abort Mission" button is clicked, the following should happen:
    // a. A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
    // b. The flight status should change to "Mission aborted."
    // c. The background color of the shuttle flight screen should change from blue to green.
    // d. The shuttle height should go to 0.
    function missionAbortClicked() {
        answer = window.confirm("Confirm that you want to abort the mission.");

        if(answer) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.background = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0"
        }
    }
    missionAbort.addEventListener("click", missionAbortClicked);

    // 5. When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
    // a. The rocket image should move 10 px in the direction of the button that was clicked.
    // b. If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    function upClicked() {
        let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight + 10000;
        document.getElementById("rocket").style.position = "relative";
        document.getElementById("rocket").style.top = "-10px";
    }
    up.addEventListener("click", upClicked);

    function downClicked() {
        // let rect = document.getElementById("rocket").getBoundingClientRect();
        // console.log(rect.top, rect.bottom);
        let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight - 10000;
        document.getElementById("rocket").style.position = "relative";
        document.getElementById("rocket").style.bottom = "-10px";
    }
    down.addEventListener("click", downClicked);

    function rightClicked() {
        document.getElementById("rocket").style.position = "relative";
        document.getElementById("rocket").style.right = "-10px";
    }
    right.addEventListener("click", rightClicked);

    function leftClicked() {
        document.getElementById("rocket").style.position = "relative";
        document.getElementById("rocket").style.left = "-10px";
    }
    left.addEventListener("click", leftClicked);

}

window.addEventListener("load", init);