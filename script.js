
// Modal Sobre Mim
const Modal = {
    open() {
        // Abrir Modal
        // Adicionar a Classe active ao Modal
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },

    close() {
        // Fechar Modal
        // Remover a classe active do Modal
        document
            .querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

// Tema Dark / Light
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const darkColors = {
    bgDocument: getStyle(html, "--bg-document"),
    textColor: getStyle(html, "--text-color"),
    bgCards: getStyle(html, "--bg-cards"),
    bgTechs: getStyle(html, "--bg-techs"),
}

const lightMode = {
    bgDocument: "#f0f2f5",
    textColor: "#22212c",
    bgCards: "#fff",
    bgTechs: "#cb92b1",
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(lightMode) : changeColors(darkColors)
})