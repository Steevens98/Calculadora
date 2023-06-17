
let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let valorHora = document.getElementById("valorPorHora").value
        let horasTrabajo = document.getElementById("horasTrabajo").value
        let horasextras = document.getElementById("horasExtras").value
        let dias = document.getElementById("dias").value
        let resultado = ((valorHora*horasTrabajo) * dias)+((valorHora*2)*horasextras)
        document.getElementById("valorTotal").value = resultado;
    })
}

funcionPredeterminada();

