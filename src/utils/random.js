function numeroRandom(tct) {
    const random = generarNumeroAlAzar(tct.length - 1)
    const parRandom = tct[random]
    tct.splice(random, 1);
    return (parRandom);
}

export default numeroRandom

function generarNumeroAlAzar(n) {
    return Math.floor(Math.random() * (n + 1));
}