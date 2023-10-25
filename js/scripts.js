window.addEventListener("load", () => {
    const form = document.querySelector("#languagePicker");
    form.addEventListener("submit", languageCalc);
});

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
    reset();

    const languageScore = {
        csharp: 0,
        javascript: 0,
        python: 0
    }

    languageScore[colorChoice.value] += 1;
    languageScore[animalChoice.value] += 1;
    languageScore[stateChoice.value] +=1;
    languageScore[foodChoice.value] +=1;
    languageScore[languageChoice.value] +=1;

    if (languageScore["csharp"] > languageScore["javascript"] && languageScore["csharp"] > languageScore["python"]) {
        document.querySelector("#displayResult").innerHTML = "C# is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/'>Learn more about C#</a>";
    } else if (languageScore["javascript"] > languageScore["csharp"] && languageScore["javascript"] > languageScore["python"]) {
        document.querySelector("#displayResult").innerHTML = "JavaScript is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'>Learn more about JavaScript</a>";
    } else if (languageScore["python"] > languageScore["csharp"] && languageScore["python"] > languageScore["javascript"]) {
        document.querySelector("#displayResult").innerHTML = "Python is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://www.python.org/doc/essays/blurb/'>Learn more about Python</a>"
    } else if (languageScore["javascript"] === languageScore["csharp"] || languageScore["javascript"] === languageScore["python"]) {
        document.querySelector("#displayResult").innerHTML = "JavaScript is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'>Learn more about JavaScript</a>";
    } else if (languageScore["python"] === languageScore["csharp"]) {
        document.querySelector("#displayResult").innerHTML = "Python is the choice for you!";
        document.querySelector("#displayLink").innerHTML = "<a href='https://www.python.org/doc/essays/blurb/'>Learn more about Python</a>";
    }
}