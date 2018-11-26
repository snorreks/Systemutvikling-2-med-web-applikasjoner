let url = "http://bigdata.stud.iie.ntnu.no/sentiment/webresources/sentiment?api-key=Happy!!!";
$(document).ready(function () {
    $("#btn").click(function () {
        getMood();
    });
});

$(document).keypress(function (e) {
    if (e.which === 13) {
        getMood();
    }
});

function getMood() {
    let input = document.querySelector('#textMood').value;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({sentence: input})
    }).then(response => response.json())
        .then(json => {
            changeColor(json);
            console.log(JSON.stringify(json))
        })
        .catch(error => console.error("Error: ", error));
}

function changeColor(input) {
    let color;
    let dogMood;
    let value = input.value;
    if (value === 0) {
        color = "black";
        dogMood = "0.jpg";
    }
    if (value === 1) {
        color = "grey";
        dogMood = "1.jpg";
    }
    if (value === 2) {
        color = "green";
        dogMood = "2.jpg";
    }
    if (value === 3) {
        color = "yellow";
        dogMood = "3.jpg";
    }
    if (value === 4) {
        color = "pink";
        dogMood = "4.jpg";
    }
    document.querySelector("body").style.backgroundColor = color;
    document.querySelector("#dog").src = dogMood;
}