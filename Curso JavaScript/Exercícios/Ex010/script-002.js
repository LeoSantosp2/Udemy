// Paisagem = Tela Deitada
// Retrato = Tela em Pé
/*
function ePaisagem(largura, altura){
    if(largura > altura){
        return true
    }
    else{
        return false
    }
}

console.log(ePaisagem(1080, 1920))
*/
const ePaisagem = (largura, altura) => largura > altura

console.log(ePaisagem(1920, 1080))