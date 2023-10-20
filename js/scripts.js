window.addEventListener("load", () => {
    const form = document.querySelector("#languagePicker");
    form.addEventListener("submit", languageCalc);
});

function languageCalc(e) {
    e.preventDefault();
    const colorChoice = document.querySelector("input[name='favColor']:checked");
    const animalChoice = document.querySelector("input[name='favAnimal']:checked");
    const stateChoice = document.querySelector("input[name='favState']:checked");
    const foodChoice = document.querySelector("input[name='favFood']:checked");
    const languageChoice = document.querySelector("input[name='favLanguage']:checked");

    if (colorChoice.value === "c#") {
        console.log("C# 1")
    } else if (colorChoice.value === "javaScript") {
        console.log("JAVA 1")
    } else if (colorChoice.value === "python") {
        console.log("python 1")
    }

    if (animalChoice.value === "c#") {
        console.log("C# 2")
    } else if (animalChoice.value === "javaScript") {
        console.log("JAVA 2")
    } else if (animalChoice.value === "python") {
        console.log("python 2")
    }

    if (stateChoice.value === "c#") {
        console.log("C# 3")
    } else if (stateChoice.value === "javaScript") {
        console.log("JAVA 3")
    } else if (stateChoice.value === "python") {
        console.log("python 3")
    }

    if (foodChoice.value === "c#") {
        console.log("C# 4")
    } else if (foodChoice.value === "javaScript") {
        console.log("JAVA 4")
    } else if (foodChoice.value === "python") {
        console.log("python 4")
    }

    if (languageChoice.value === "c#") {
        console.log("C# 5")
    } else if (languageChoice.value === "javaScript") {
        console.log("JAVA 5")
    } else if (languageChoice.value === "python") {
        console.log("python 5")
    }
}