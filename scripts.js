/*variaveis
        e um espaço de memoria que vc reserva e pode quardar qualquer coisa
    3 jeitos de criar uma variavel
    -var / jeito antigo não usa mais foi descontinuado
    -let  -> vc pode alterar o valor depois
    -const -> constante vc não consegue alterar o valor depois.

    Funções
        um trecho de codigo que so executado quando e chamado
        exemplo

        const abacate = "oi, sou um abacate"
        const pera = "oi, sou uma pera"
        const conta = 30+20

        console. log(abacate)
        console. log(pera)
        console. log(conta)
*/
const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible" 
}

function esconderForm(){
    form.style.left = "-305px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden" 
}