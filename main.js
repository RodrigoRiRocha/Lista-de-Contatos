document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');
    const contatosBody = document.getElementById('contatos-body');
    const totalContatos = document.getElementById('total-contatos');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome-contato').value;
        const telefone = document.getElementById('telefone-contato').value;

        
        const nomePattern = /^[a-zA-Z]+(\s[a-zA-Z]+)+$/;
        const telefonePattern = /\(\d{2}\) \d{4,5}-\d{4}/;

        if (!nomePattern.test(nome)) {
            alert("O nome deve conter pelo menos um sobrenome.");
            return;
        }

        if (!telefonePattern.test(telefone)) {
            alert("O número deve seguir o formato (XX) XXXXX-XXXX.");
            return;
        }

        const novaLinha = document.createElement('tr');

        const nomeTd = document.createElement('td');
        nomeTd.textContent = nome;
        novaLinha.appendChild(nomeTd);

        const telefoneTd = document.createElement('td');
        telefoneTd.textContent = telefone;
        novaLinha.appendChild(telefoneTd);

        contatosBody.appendChild(novaLinha);

        totalContatos.textContent = contatosBody.getElementsByTagName('tr').length;

        form.reset();
    });
});
