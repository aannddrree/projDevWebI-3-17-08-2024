document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const curso = document.getElementById('curso').value;

    const resultado = `
        <h2>Aluno Cadastrado</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Curso:</strong> ${curso}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;

    // Limpar o formulário
    document.getElementById('cadastroForm').reset();
});
