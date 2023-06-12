
let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        let interfazHora = document.getElementById("interfazHoras").value
        let valorHora = document.getElementById("valorPorHora").value
        let interfaz = document.getElementById("interfazHorasTrabajadas").value
        let resultado = (valorHora*interfazHora)+(valorHora*interfaz)
        document.getElementById("valorTotal").value = resultado;
    })
}

funcionPredeterminada();

