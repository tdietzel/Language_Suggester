window.addEventListener("load", () => {
    const form = document.querySelector("#languagePicker");
    form.addEventListener("submit", languageCalc);

    document.getElementById("colorFirstChoice").addEventListener("change", colorChange);
    document.getElementById("colorSecondChoice").addEventListener("change", colorChange2);
    document.getElementById("colorThirdChoice").addEventListener("change", colorChange3);
    document.getElementById("animalFirstChoice").addEventListener("change", animalChange);
    document.getElementById("animalSecondChoice").addEventListener("change", animalChange2);
    document.getElementById("animalThirdChoice").addEventListener("change", animalChange3);
    document.getElementById("stateFirstChoice").addEventListener("change", stateChange);
    document.getElementById("stateSecondChoice").addEventListener("change", stateChange2);
    document.getElementById("stateThirdChoice").addEventListener("change", stateChange3);
    document.getElementById("foodFirstChoice").addEventListener("change", foodChange);
    document.getElementById("foodSecondChoice").addEventListener("change", foodChange2);
    document.getElementById("foodThirdChoice").addEventListener("change", foodChange3);
    document.getElementById("languageFirstChoice").addEventListener("change", languageChange);
    document.getElementById("languageSecondChoice").addEventListener("change", languageChange2);
    document.getElementById("languageThirdChoice").addEventListener("change", languageChange3);
});

// Question One
function colorChange() {
    document.getElementById("colorChange1").style.color = "red";
    document.getElementById("colorChange2").style.color = "white";
    document.getElementById("colorChange3").style.color = "white";
}
function colorChange2() {
    document.getElementById("colorChange1").style.color = "white";
    document.getElementById("colorChange2").style.color = "red";
    document.getElementById("colorChange3").style.color = "white";
}
function colorChange3() {
    document.getElementById("colorChange1").style.color = "white";
    document.getElementById("colorChange2").style.color = "white";
    document.getElementById("colorChange3").style.color = "red";
}
// Question Two
function animalChange() {
    document.getElementById("animalChange1").style.color = "red";
    document.getElementById("animalChange2").style.color = "white";
    document.getElementById("animalChange3").style.color = "white";
}
function animalChange2() {
    document.getElementById("animalChange1").style.color = "white";
    document.getElementById("animalChange2").style.color = "red";
    document.getElementById("animalChange3").style.color = "white";
}
function animalChange3() {
    document.getElementById("animalChange1").style.color = "white";
    document.getElementById("animalChange2").style.color = "white";
    document.getElementById("animalChange3").style.color = "red";
}
// Question Three
function stateChange() {
    document.getElementById("stateChange1").style.color = "red";
    document.getElementById("stateChange2").style.color = "white";
    document.getElementById("stateChange3").style.color = "white";
}
function stateChange2() {
    document.getElementById("stateChange1").style.color = "white";
    document.getElementById("stateChange2").style.color = "red";
    document.getElementById("stateChange3").style.color = "white";
}
function stateChange3() {
    document.getElementById("stateChange1").style.color = "white";
    document.getElementById("stateChange2").style.color = "white";
    document.getElementById("stateChange3").style.color = "red";
}
// Question Four
function foodChange() {
    document.getElementById("foodChange1").style.color = "red";
    document.getElementById("foodChange2").style.color = "white";
    document.getElementById("foodChange3").style.color = "white";
}
function foodChange2() {
    document.getElementById("foodChange1").style.color = "white";
    document.getElementById("foodChange2").style.color = "red";
    document.getElementById("foodChange3").style.color = "white";
}
function foodChange3() {
    document.getElementById("foodChange1").style.color = "white";
    document.getElementById("foodChange2").style.color = "white";
    document.getElementById("foodChange3").style.color = "red";
}
// Question Five
function languageChange() {
    document.getElementById("languageChange1").style.color = "red";
    document.getElementById("languageChange2").style.color = "white";
    document.getElementById("languageChange3").style.color = "white";
}
function languageChange2() {
    document.getElementById("languageChange1").style.color = "white";
    document.getElementById("languageChange2").style.color = "red";
    document.getElementById("languageChange3").style.color = "white";
}
function languageChange3() {
    document.getElementById("languageChange1").style.color = "white";
    document.getElementById("languageChange2").style.color = "white";
    document.getElementById("languageChange3").style.color = "red";
}

function reset() {
    document.querySelector("#displayResult").innerHTML = "";
}
function languageCalc(e) {
    e.preventDefault();
    const colorChoice = document.querySelector("input[name='favColor']:checked");
    const animalChoice = document.querySelector("input[name='favAnimal']:checked");
    const stateChoice = document.querySelector("input[name='favState']:checked");
    const foodChoice = document.querySelector("input[name='favFood']:checked");
    const languageChoice = document.querySelector("input[name='favLanguage']:checked");
    let cSharp = 0;
    let java = 0;
    let python = 0;

    reset();

    if (colorChoice.value === "c#") {
        cSharp += 1;
    } else if (colorChoice.value === "javaScript") {
        java += 1;
    } else if (colorChoice.value === "python") {
        python += 1;
    }

    if (animalChoice.value === "c#") {
        cSharp += 1;
    } else if (animalChoice.value === "javaScript") {
        java += 1;
    } else if (animalChoice.value === "python") {
        python += 1;
    }

    if (stateChoice.value === "c#") {
        cSharp += 1;
    } else if (stateChoice.value === "javaScript") {
        java += 1;
    } else if (stateChoice.value === "python") {
        python += 1;
    }

    if (foodChoice.value === "c#") {
        cSharp += 1;
    } else if (foodChoice.value === "javaScript") {
        java += 1;
    } else if (foodChoice.value === "python") {
        python += 1;
    }

    if (languageChoice.value === "c#") {
        cSharp += 1;
    } else if (languageChoice.value === "javaScript") {
        java += 1;
    } else if (languageChoice.value === "python") {
        python += 1;
    }

    if (cSharp > java && cSharp > python) {
        console.log("Python = ", python, " JavaScript = ", java, " C# = ", cSharp)
        document.querySelector("#displayResult").innerHTML = "C# is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/'>Learn more about C#</a>"
    } else if (java > cSharp && java > python) {
        console.log("Python = ", python, " JavaScript = ", java, " C# = ", cSharp)
        document.querySelector("#displayResult").innerHTML = "JavaScript is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'>Learn more about JavaScript</a>"
    } else if (python > cSharp && python > java) {
        console.log("Python = ", python, " JavaScript = ", java, " C# = ", cSharp)
        document.querySelector("#displayResult").innerHTML = "Python is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://www.python.org/doc/essays/blurb/'>Learn more about Python</a>"
    } else if (java === cSharp || java === python) {
        console.log("Python = ", python, " JavaScript = ", java, " C# = ", cSharp)
        document.querySelector("#displayResult").innerHTML = "JavaScript is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'>Learn more about JavaScript</a>"
    } else if (python === cSharp) {
        console.log("Python = ", python, " JavaScript = ", java, " C# = ", cSharp)
        document.querySelector("#displayResult").innerHTML = "Python is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://www.python.org/doc/essays/blurb/'>Learn more about Python</a>"
    }
}