var jokePar = document.getElementById("joke")
const checkBox = document.getElementById("checker")


document.getElementById("generateButton").onclick = async function() {
    if (checkBox.checked) {
        console.log(checkBox.checked)
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data["setup"]);
            console.log(data["delivery"]);
    
            jokePar.innerText = data["setup"] + " \n " + data["delivery"]
        })
    }else {
        fetch("https://v2.jokeapi.dev/joke/Any?type=twopart")
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data["setup"]);
            console.log(data["delivery"]);
    
            jokePar.innerText = data["setup"] + " \n " + data["delivery"]
        })
    }
};


};
