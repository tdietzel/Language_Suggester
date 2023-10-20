window.addEventListener("load", () => {
    const form = document.querySelector("#languagePicker");
    form.addEventListener("submit", languageCalc);
    document.getElementById("colorFirstChoice").addEventListener("change", colorChange);
});

function colorChange() {
    document.getElementById("change1").style.color = "red";
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