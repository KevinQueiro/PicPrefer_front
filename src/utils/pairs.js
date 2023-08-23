function generarParesTodosContraTodos(numero) {
    const paresGenerados = new Set();

    for (let i = 0; i <= numero; i++) {
        for (let j = i + 1; j <= numero; j++) {
            const par = [i, j];
            paresGenerados.add(par);
        }
    }

    const paresFinales = Array.from(paresGenerados)
    return paresFinales
}

export default generarParesTodosContraTodos;