// receber uma quantidade de valores pra avaliar 
//função que exibe a cada valor se é impar ou par

tipo(27);

function tipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if (i % 2 === 0)
            console.log(i, 'Par');
        else
            console.log(i, 'Impar');
    }
}