//navbar margin
// Function to update the margin-right property of #home based on window width
function updateHomeMargin() {
    const home = document.getElementById('home');
    if (window.innerWidth <= 768) {
      home.classList.remove('home-margin');
    } else {
      home.classList.add('home-margin');
    }
  }
  
  // Add an event listener to detect window resize and call the updateHomeMargin function
  window.addEventListener('resize', updateHomeMargin);
  
  // Call the function initially to set the correct margin on page load
  updateHomeMargin();
  
//form input storage
function response() {

    //assign variables with the input values according to ID
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var numInput = document.getElementById("num");
    var num = numInput.value;
    var msgInput = document.getElementById("msg");
    var msg = msgInput.value;

    // Store the input values in sessionStorage to be retrieved from function showresponse
    sessionStorage.setItem("namedata", name);
    sessionStorage.setItem("numdata", num);
    sessionStorage.setItem("msgdata", msg);


}
function showresponse(){
    // Retrieve values from sessionStorage
    var newName = sessionStorage.getItem("namedata");
    var newNum = sessionStorage.getItem("numdata");
    var newMsg = sessionStorage.getItem("msgdata");

    // Write out the values in the response page
    document.getElementById("name-response").innerText = newName;
    document.getElementById("num-response").innerText = newNum;
    document.getElementById("msg-response").innerText = newMsg;
}

//
  
function clock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    document.querySelector('.clock').innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn;
        }
        return standIn;
         
    }
}


setInterval(clock, 1000);



function calendar() {
    var time = new Date();
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var day = time.getDay();
    var date = time.getDate();
    var month = time.getMonth();
    var result = date + " " + monthNames[month] + ", " + dayNames[day]
    return result;
}

document.querySelector('.calendarResult').innerText = calendar();





// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Get the current scroll position
    const scrollPositionInVH = (window.scrollY / window.innerHeight) * 100;

    // Check if the scroll position is greater than or equal to 120vh (adjust this value as needed)
    if (scrollPositionInVH >= 120) {
        // Scrolling down, add the 'animate' class to trigger the forward animation
        document.querySelector('.about').classList.add('animate');
        document.querySelector('.about').classList.remove('animateBack');
    } else {
        // Scrolling up, add the 'animateBack' class to trigger the reverse animation
        document.querySelector('.about').classList.add('animateBack');
        document.querySelector('.about').classList.remove('animate');
    }
});
//photo click
function toggleDesc() {
    const description = document.querySelector('.photo-description');
    if (description.classList.contains('show-desc')){
    description.classList.remove('show-desc');
    description.classList.add('hide-desc')
    } else{
        description.classList.remove('hide-desc')
        description.classList.add('show-desc')
    }
}

function toggleDesc(clickedElement) {
    const description = clickedElement.nextElementSibling;
    description.classList.toggle('show-desc');
}
  
//show schedule when clicked
function showtable(){
    table = document.querySelector('.schedule')
    table.classList.add('clicked')
}