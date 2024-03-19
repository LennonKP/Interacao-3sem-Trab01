const cartao = document.getElementById("cartao")
const tituloCartao = document.getElementById("tituloCartao")
const textoCartao = document.getElementById("textoCartao")

// -----------------------------------







const titulo = document.getElementById("titulo")
const corTitulo = document.getElementById("corTitulo")

titulo.addEventListener('change', () => {
    tituloCartao.innerHTML = titulo.value
})
corTitulo.addEventListener('change', () => {
    console.log(tituloCartao.color)
    tituloCartao.style.color = corTitulo.value
})

const texto = document.getElementById("texto")
const corTexto = document.getElementById("corTexto")

texto.addEventListener('change', () => {
    textoCartao.innerHTML = texto.value
})
corTexto.addEventListener('change', () => {
    textoCartao.style.color = corTexto.value
})

const larguraBorda = document.getElementById("larguraBorda")
const radiusBorda = document.getElementById("radiusBorda")
const corBorda = document.getElementById("corBorda")

larguraBorda.addEventListener('change', () => {
    cartao.style.borderWidth = larguraBorda.value + 'px'
})

radiusBorda.addEventListener('change', () => {
    cartao.style.borderRadius = radiusBorda.value + "px"
})

corBorda.addEventListener('change', () => {
    cartao.style.borderColor = corBorda.value
})


const corFundo = document.getElementById("corFundo")
const largura = document.getElementById("largura")
const altura = document.getElementById("altura")

corFundo.addEventListener('change', () => {
    cartao.style.backgroundColor = corFundo.value
})

largura.addEventListener('change', () => {
    if (largura.value < 200 || largura.value > 400) {
        alert('Valores de largura permitidos entre 200 e 400')
        largura.value = ''
        return
    }

    cartao.style.width = largura.value + "px"
})

altura.addEventListener('change', () => {
    if (altura.value < 200 || altura.value > 400) {
        alert('Valores de altura permitidos entre 200 e 400')
        altura.value = ''
        return
    }

    cartao.style.height = largura.value + "px"
})
