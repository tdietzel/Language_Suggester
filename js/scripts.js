window.addEventListener("load", () => {
    const form = document.querySelector("#languagePicker");
    form.addEventListener("submit", languageCalc);
});

function languageCalc(e) {
    e.preventDefault();
    const colorChoice = document.querySelector("input[name='favColor']:checked");
    const animalChoice = document.querySelector("input[name='favAnimal']:checked");

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
}