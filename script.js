const cartao = document.getElementById("cartao")
const tituloCartao = document.getElementById("tituloCartao")
const textoCartao = document.getElementById("textoCartao")


const inputBorda = document.getElementById("borda")
const corDeFundo = document.getElementById("corDeFundo")
const titulo = document.getElementById("titulo")
const texto = document.getElementById("texto")
const borderRadius = document.getElementById("border-radius")
const largura = document.getElementById("largura")


inputBorda.addEventListener('change', () => {
    cartao.style.border = inputBorda.value
})
corDeFundo.addEventListener('change', () => {
    cartao.style.backgroundColor = corDeFundo.value
})
titulo.addEventListener('change', () => {
    tituloCartao.innerHTML = titulo.value
})
texto.addEventListener('change', () => {
    textoCartao.innerHTML = texto.value
})

borderRadius.addEventListener('change', () => {
    cartao.style.borderRadius = borderRadius.value + "px"
})

largura.addEventListener('change', () => {
    if (largura.value < 200 || largura.value > 400) return    

    cartao.style.width = largura.value + "px"
})
