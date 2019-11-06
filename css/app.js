const FirstButton = document.getElementById("button-1");
const SecondButton = document.getElementById("button-2");
FirstButton.addEventListener("click", func, false);
SecondButton.addEventListener("click", func, false);

function func() {
    const content = document.getElementById("content");
    switch (content.className) {
        case "wrapper first-slid":
            content.className = ("wrapper second-slid");
            break;
        case "wrapper second-slid":
            content.className = ("wrapper third-slid");
            break;
        case "wrapper third-slid":
            content.className = ("wrapper first-slid");
            break;
            return content.className;
    }

}