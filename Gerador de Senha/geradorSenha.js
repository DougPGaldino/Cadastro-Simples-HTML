function gerarSenha(comprimento=12){
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()-=_+[]{}<>,.;:/?';
    
    let senha = '';

    const caractereslength = caracteres.length;

    for (let i = 0; i < comprimento; i++) {
        const randomIndex = Math.floor(Math.random() * caractereslength);
        senha += caracteres[randomIndex];
    }
    return senha;
}

function mostrarSenha(){
    const senha = gerarSenha();
    document.getElementById("senhaDisplay").textContent = senha;
}

