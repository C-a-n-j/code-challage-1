//user input
let carSpeed = parseInt(prompt("Enter the speed of a car"));
// checking for input
if(carSpeed){
    const speedLimit = 70;
    let demerits;
    // real code

    if(speedLimit < 70){
        alert("ok")
    }
    else if(speedLimit > 70){
       //calculating the demerits
        demerits = (carSpeed - speedLimit)/5;
        // giving point
        alert(`your point: ${demerits}`)
        if(demerits > 12){
            alert("Drivers license suspended")
        }

    }

}else{
    alert("you didn't enter anything")
}
