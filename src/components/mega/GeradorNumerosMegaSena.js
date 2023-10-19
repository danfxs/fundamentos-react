const geradorNumerosMegaSena = function(qtde) {
    let numeros = []
    let rand
    while (numeros.length < qtde) {
        rand = Math.floor(Math.random() * 60) + 1
        if (!numeros.includes(rand)) {
            numeros.push(rand)
        }
    }
    return numeros.sort(function(a, b){return a - b})
}

export default geradorNumerosMegaSena