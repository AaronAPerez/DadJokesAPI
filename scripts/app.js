let randomBtn = document.getElementById("randomBtn");

async function getJoke(){
    let apiResponse = await fetch("https://icanhazdadjoke.com/").then((Response) => Response.json());
    console.log(apiResponse);
}



