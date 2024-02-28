
const nombreUsuario = prompt('ingresa tu nombre')
const numeroDeJuegos = +prompt('Ingresa cuantas veces deseas jugar')
if (numeroDeJuegos <= 0) { 
    alert('Por favor usar un numero mayor a 0 para poder jugar') 
}

function cachipun(nombreUsuario, numeroDeJuegos) {

    for (let i = 1; i <= numeroDeJuegos; i++) {

        const jugadaUsuario = +prompt('ingresa tu jugada eligiendo un numero: 0 (Piedra✊), 1 (Papel🖐️) o 2 (Tijera✌️)')
        const jugadaMaquina = Math.floor(Math.random() * 3)


        let simboloUsuario = ''
        switch (jugadaUsuario) {
            case 0:
                simboloUsuario = '✊'
                break;
            case 1:
                simboloUsuario = '🖐️'
                break;
            case 2:
                simboloUsuario = '✌️'
                break;
            default:
                alert('Opcion invalida, elegir numero entre 0 y 2')
        }

        let simboloMaquina = ''
        switch (jugadaMaquina) {
            case 0:
                simboloMaquina = '✊'
                break;
            case 1:
                simboloMaquina = '🖐️'
                break;
            case 2:
                simboloMaquina = '✌️'
                break;
        }


        if (simboloUsuario === simboloMaquina) {
            alert(`Es un Empate porque elegiste ${simboloUsuario} y la maquina eligio ${simboloMaquina}`)
        }

        else if ((simboloUsuario === '✊' && simboloMaquina === '🖐️') ||
            (simboloUsuario === '🖐️' && simboloMaquina === '✌️') ||
            (simboloUsuario === '✌️' && simboloMaquina === '✊')) {
            alert(`Lamentablemente la Maquina gana porque tu elegiste ${simboloUsuario} y la maquina eligio ${simboloMaquina}`)
        }

        else {
            alert(`Felicidades!!! Ganaste ${nombreUsuario} porque tu elegiste ${simboloUsuario} y la maquina eligio ${simboloMaquina}`)
        }

    }

}

cachipun(nombreUsuario, numeroDeJuegos)



