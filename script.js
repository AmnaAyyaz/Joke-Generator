document.getElementById("get-joke").addEventListener("click", function () 
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any", true);

    xhr.onload = function ()
     {
        if (this.status === 200) 
            {
            let response = JSON.parse(this.responseText);
            let jokeText = "";

            if (response.type === "single") {
                jokeText = response.joke;
            } else 
            {
                jokeText = `${response.setup} <br><br> ${response.delivery}`;
            }

            document.getElementById("joke").innerHTML = jokeText;
        }
    };

    xhr.send();
});
