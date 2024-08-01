// Função para carregar usuários do localStorage e exibir na lista
function carregarUsuarios() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = ''; // Limpa a lista antes de atualizar
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.forEach(usuario => {
        const li = document.createElement('li');
        li.textContent = `Nome: ${usuario.nome}, Email: ${usuario.email}, Telefone: ${usuario.telefone}, Endereço: ${usuario.endereco}, Data de Nascimento: ${usuario.dataNascimento}`;
        listaUsuarios.appendChild(li);
    });
}

// Função para cadastrar usuário
function cadastrarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const telefone = document.getElementById("telefone").value;
    const endereco = document.getElementById("endereco").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    if (!nome || !email || !senha || !telefone || !endereco || !dataNascimento) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuarios.push({ nome, email, senha, telefone, endereco, dataNascimento });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    
    alert('Cadastro realizado com sucesso!');
    document.getElementById('formCadastro').reset();
    
    carregarUsuarios(); // Atualiza a lista de usuários
}

// Função para alternar a exibição da lista de usuários
function alternarLista() {
    const listaUsuarios = document.getElementById('listaUsuarios');
    const botaoToggle = document.getElementById('toggleLista');

    if (listaUsuarios.style.display === 'none') {
        listaUsuarios.style.display = 'block';
        botaoToggle.textContent = 'Ocultar Usuários';
    } else {
        listaUsuarios.style.display = 'none';
        botaoToggle.textContent = 'Mostrar Usuários';
    }
}

// Adiciona um listener para o evento de submissão do formulário
document.getElementById('formCadastro').addEventListener('submit', cadastrarUsuario);

// Adiciona um listener para o botão de alternar a lista
document.getElementById('toggleLista').addEventListener('click', alternarLista);

// Carrega a lista de usuários ao carregar a página
window.onload = carregarUsuarios;
