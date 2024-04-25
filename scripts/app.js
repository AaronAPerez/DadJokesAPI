// button element with the ID "randomBtn"
let randomBtn = document.getElementById("randomBtn");

// div element with the ID "jokeDisplay"
const jokeDisplay = document.getElementById("jokeDisplay");

// Define an asynchronous function to fetch a dad joke from the API
const getDadJoke = async () => {
  // Use fetch() to make a GET request to the API endpoint
  const dadJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  // Parse the response as JSON
  const dadJokeJSON = await dadJoke.json();

  // Check if the API request was successful (status code 200)
  if (dadJokeJSON.status === 200) {
    // If successful, set the textContent of the jokeDisplay element to the joke text
    jokeDisplay.textContent = dadJokeJSON.joke;
  } else {
    // If unsuccessful, set the textContent to an error message
    jokeDisplay.textContent = "Error retrieving dad joke!";
  }
};

// click event listener to the randomBtn element
// When clicked, call the getDadJoke function
randomBtn.addEventListener("click", getDadJoke);

// Call function getDateTime() and store the result in dateTime
var dateTime = getDateTime();

// Update the textContent of an element with ID "dateTime" with a formatted date and time string
document.getElementById('dateTime').innerHTML = `${dateTime[0]} &middot; ${dateTime[1]}`

// function to get the current date and time in a specific format
function getDateTime() {
  // array of month names
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Get the current date
  var today = new Date();

  // Format the date as "Month Day, Year"
  var date = months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();

  // Get the current hours
  var hours = today.getHours();

  // Get the current minutes
  var minutes = today.getMinutes();

  // Determine whether it's AM or PM
  var ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // Ensure 0 is displayed as 12

  // Add leading zero to minutes if needed
  minutes = minutes < 10 ? '0' + minutes : minutes;

  // Format the time as "Hours:Minutes AM/PM"
  var time = hours + ':' + minutes + ' ' + ampm;

  // Log the date and time to the console
  console.log(date);
  console.log(time);

  // Return an array with the formatted time and date
  return [time, date];
}
