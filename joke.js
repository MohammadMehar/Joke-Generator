var jokePar = document.getElementById("joke")



document.getElementById("generateButton").onclick = async function() {
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data["setup"]);
        console.log(data["delivery"]);

        var jokeText = jokePar.innerText = data["setup"] + " \n " + data["delivery"]
        var current = ""
        for (i=1; i != jokeText.length; i++) {
            current = current + jokeText[i-1]
            jokePar.innerText = current

        }

        /*jokePar.innerText = data["setup"] + " \n " + data["delivery"]*/
    })
};